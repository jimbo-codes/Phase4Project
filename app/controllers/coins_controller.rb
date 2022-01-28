require 'open-uri'
require 'net/http'
require 'json'

class CoinsController < ApplicationController

  # GET /coins
  # This makes external API call to go through all coins, 
  # creating them in the database if not there
  def index
    url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    parsedobj = JSON.parse(response.body)
      parsedobj.each do |coin|
        if !Coin.find_by(coin_symbol: coin['symbol'])
          Coin.create(
            current_price: coin['current_price'], 
            market_cap: coin['market_cap'], 
            coin_symbol: coin['symbol'], 
            update_time: coin['last_updated'],
            total_supply: coin['total_supply'],
            max_supply: coin['max_supply'], 
            coin_name: coin['name'], 
            coin_image: coin['image'],
            coin_id: coin['id'],
            price_chg: coin['price_change_percentage_24h'],
            market_rank: coin['market_cap_rank'],
            volume: coin['total_volume']
          )
        end
      end
      @coins = Coin.all
    render json: @coins

      # debugger
  end


  def show
    coin = Coin.find_by_id(params[:id])
    render json: coin, status: 200
  end

  # POST /coins
  def create
    @coin = Coin.new(coin_params)

    if @coin.save
      render json: @coin, status: :created, location: @coin
    else
      render json: @coin.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /coins/1
  def update
    coin = Coin.find_by_coin_id params[:info][:id]
    dod = params[:info][:dodChg].to_f / coin.current_price
    coin['market_cap'] = params[:info][:market_cap]
    coin['current_price'] = params[:info][:price]
    coin['price_chg'] = dod
    coin.save
    render json: coin, status: 200
    # Update Price, market cap, and 24h Change

        # Make it update with the "refresh" button in the table
    end


  def destroy

    # SET THE INSPECT button to "Delete" and fire off a delete here
    @coin.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coin
      @coin = Coin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def coin_params
      params.fetch(:coin, {})
    end
end

class UsercoinsController < ApplicationController
    def show
        # return the full list of usercoins (and have the ability to add to usercoins) based on the USER
        user = User.find_by_id(params[:id])
        render json: user.portfolioCoins, status: 200
    end

    def create
        coin = Coin.find_by_id(params[:id])
        new_port = Usercoin.new(coin_id: coin.id, user_id: params[:user][:id])
        new_port.save
        render json: coin, status: 200
    end

    def destroy
    del = Coin.find_by_id params[:id]
    delete = Usercoin.find_by coin_id: del.id
    delete.destroy
    render json: {}, status: 200
    end
end

class CreateCoins < ActiveRecord::Migration[7.0]
  def change
    create_table :coins do |t|
      #This price should go away if you have time to get in prices)
      t.string :coin_id
      t.float :current_price
      t.string :coin_name
      t.string :coin_image
      t.string :coin_symbol
      t.datetime :update_time
      t.integer :market_cap
      t.integer :total_supply
      t.integer :max_supply
      t.float :price_chg
      t.integer :market_rank
      t.integer :volume
      t.timestamps
    end
  end
end

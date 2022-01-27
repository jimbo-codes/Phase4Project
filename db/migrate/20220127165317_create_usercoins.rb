class CreateUsercoins < ActiveRecord::Migration[7.0]
  def change
    create_table :usercoins do |t|
      t.integer :coin_id
      t.integer :user_id
    end
  end
end

class Coin < ApplicationRecord
    has_many :usercoins
    has_many :users, through: :usercoins
end

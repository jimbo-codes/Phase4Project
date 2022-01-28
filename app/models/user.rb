require 'bcrypt'
class User < ApplicationRecord
    has_secure_password
    # validaitons, has secure password, etc
    validates :username, uniqueness: true

    has_many :usercoins
    has_many :coins, through: :usercoins

    def portfolioCoins
        list = self.coins
    end
end

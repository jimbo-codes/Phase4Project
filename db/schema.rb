# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_27_165317) do

  create_table "coins", force: :cascade do |t|
    t.string "coin_id"
    t.float "current_price"
    t.string "coin_name"
    t.string "coin_image"
    t.string "coin_symbol"
    t.datetime "update_time", precision: 6
    t.integer "market_cap"
    t.integer "total_supply"
    t.integer "max_supply"
    t.float "price_chg"
    t.integer "market_rank"
    t.integer "volume"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "usercoins", force: :cascade do |t|
    t.integer "coin_id"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end

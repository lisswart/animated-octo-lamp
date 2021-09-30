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

ActiveRecord::Schema.define(version: 2021_09_30_032923) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "category_label"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "preferences", force: :cascade do |t|
    t.integer "session_length"
    t.integer "break_length"
    t.integer "long_break_length"
    t.boolean "enable_long_break"
    t.integer "no_of_sessions_before_long_break"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_preferences_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "task_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "timers", force: :cascade do |t|
    t.integer "duration"
    t.bigint "category_id", null: false
    t.bigint "task_id", null: false
    t.bigint "preference_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_timers_on_category_id"
    t.index ["preference_id"], name: "index_timers_on_preference_id"
    t.index ["task_id"], name: "index_timers_on_task_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "preferences", "users"
  add_foreign_key "timers", "categories"
  add_foreign_key "timers", "preferences"
  add_foreign_key "timers", "tasks"
end

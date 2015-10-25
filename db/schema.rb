# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151025224127) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answer_upvotes", force: :cascade do |t|
    t.integer  "value",      null: false
    t.integer  "user_id",    null: false
    t.integer  "answer_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "answer_upvotes", ["user_id", "answer_id"], name: "index_answer_upvotes_on_user_id_and_answer_id", unique: true, using: :btree

  create_table "answers", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.text     "body",        null: false
    t.integer  "question_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "answers", ["question_id"], name: "index_answers_on_question_id", using: :btree
  add_index "answers", ["user_id"], name: "index_answers_on_user_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",          null: false
    t.text     "body",             null: false
    t.integer  "commentable_id",   null: false
    t.string   "commentable_type", null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "comments", ["commentable_id", "commentable_type"], name: "index_comments_on_commentable_id_and_commentable_type", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "question_upvotes", force: :cascade do |t|
    t.integer  "value",       null: false
    t.integer  "user_id",     null: false
    t.integer  "question_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "question_upvotes", ["user_id", "question_id"], name: "index_question_upvotes_on_user_id_and_question_id", unique: true, using: :btree

  create_table "questions", force: :cascade do |t|
    t.string   "title",                  null: false
    t.text     "body"
    t.integer  "user_id",                null: false
    t.string   "location"
    t.integer  "views",      default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "questions", ["title"], name: "index_questions_on_title", unique: true, using: :btree
  add_index "questions", ["user_id"], name: "index_questions_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.integer  "tag_id",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "taggings", ["question_id"], name: "index_taggings_on_question_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "user_tags", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_tags", ["tag_id"], name: "index_user_tags_on_tag_id", using: :btree
  add_index "user_tags", ["user_id"], name: "index_user_tags_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                                      null: false
    t.string   "password_digest",                                                                                                               null: false
    t.string   "session_token",                                                                                                                 null: false
    t.datetime "created_at",                                                                                                                    null: false
    t.datetime "updated_at",                                                                                                                    null: false
    t.string   "picture_url",     default: "http://res.cloudinary.com/djp2nuknn/image/upload/v1445034090/user_photos/va4gyig8agjmnj4eqaue.jpg"
    t.string   "email"
    t.text     "bio"
    t.string   "tagline",         default: "User Extraordinaire"
    t.string   "display_name"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
u1 = User.create(username: "guest", password: "password")
u2 = User.create(username: "guest2", password: "password") 
u3 = User.create(username: "guest3", password: "password") 
u4 = User.create(username: "guest4", password: "password") 
u6 = User.create(username: "guest5", password: "password") 
u5 = User.create(username: "guest6", password: "password") 

t1 = Tag.create!(name: "Sports")
t2 = Tag.create!(name: "Love")
t3 = Tag.create!(name: "Psychology")
t4 = Tag.create!(name: "Food")
t5 = Tag.create!(name: "Science")
t6 = Tag.create!(name: "Health")
t7 = Tag.create!(name: "Games")
t8 = Tag.create!(name: "Technology")
t9 = Tag.create!(name: "Life Questions")
t10 = Tag.create!(name: "Philanthropy")

ta1 = Tagging.create!(question_id: q1.id, tag_id: 2)
ta2 = Tagging.create!(question_id: q2.id, tag_id: 2)
ta3 = Tagging.create!(question_id: q3.id, tag_id: 2)
ta4 = Tagging.create!(question_id: q4.id, tag_id: 3)
ta5 = Tagging.create!(question_id: q5.id, tag_id: 6)
ta6 = Tagging.create!(question_id: q6.id, tag_id: 9) 
ta7 = Tagging.create!(question_id: q8.id, tag_id: 9) 
ta8 = Tagging.create!(question_id: q7.id, tag_id: 7) 

ut1 = UserTag.create(user_id: 1, tag_id: 1) 
ut2 = UserTag.create(user_id: 2, tag_id: 1) 
ut3 = UserTag.create(user_id: 3, tag_id: 1) 
ut4 = UserTag.create(user_id: 4, tag_id: 1) 
ut5 = UserTag.create(user_id: 1, tag_id: 2) 
ut6 = UserTag.create(user_id: 1, tag_id: 3) 
ut7 = UserTag.create(user_id: 1, tag_id: 4) 
ut8 = UserTag.create(user_id: 1, tag_id: 5) 






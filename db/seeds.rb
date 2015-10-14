# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


q1 = Question.create(title: "q1", body: "I have a question!!", author_id: 2),
q2 = Question.create(title: "q2", body: "I do too!!", author_id: 2),
q3 = Question.create(title: "q3", body: "SO MANY QUESTIONS", author_id: 2),
q4 = Question.create(title: "q4", body: "Please give me answers :( !", author_id: 2),
a1 = Answer.create!(author_id: 2, question_id: 5, body: "I want some chocolate"), 
a2 = Answer.create!(author_id: 3, question_id: 5, body: "I want some too, damnnn"), 
a3 = Answer.create!(author_id: 4, question_id: 6, body: "Dum deee dum") 


class Answer < ActiveRecord::Base
	validates :user_id, :body, :question_id, presence: true 
	belongs_to :author,
	class_name: "User",
	foreign_key: :user_id
	belongs_to :question 
	has_many :comments, as: :commentable 
	has_many :upvotes,
	class_name: "AnswerUpvote",
	foreign_key: :answer_id,
	primary_key: :id 
	has_many :voters, through: :upvotes, source: :user  
end

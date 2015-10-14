class Answer < ActiveRecord::Base
	validates :author_id, :body, :question_id, presence: true 
	belongs_to :author,
	class_name: "User",
	foreign_key: :user_id
	belongs_to :question 
end
class QuestionUpvote < ActiveRecord::Base
	validates :user_id, :question_id, :value, presence: true 
	validates :value, inclusion: { in: [-1,1] }
	validates_uniqueness_of :user_id, scope: :question_id 

	belongs_to :user
	belongs_to :question 
end
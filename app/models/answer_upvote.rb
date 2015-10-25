class AnswerUpvote < ActiveRecord::Base
	validates :user_id, :answer_id, :value, presence: true 
	validates :value, inclusion: { in: [-1,1] }
	validates_uniqueness_of :user_id, scope: :answer_id 

	belongs_to :user
	belongs_to :answer 
end

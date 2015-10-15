class Tag < ActiveRecord::Base
	validates :name, presence: true, uniqueness: true 

	has_many :taggings
	has_many :questions, through: :taggings
	has_many :user_tags 
	has_many :users, through: :user_tags 

end

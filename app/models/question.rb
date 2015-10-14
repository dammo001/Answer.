class Question < ActiveRecord::Base
	validates :title, :author_id, presence: true 
	belongs_to :author,
	class_name: "User",
	foreign_key: :user_id, 
	primary_key: :id
	has_many :answers


end

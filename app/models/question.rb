class Question < ActiveRecord::Base
	validates :title, :author_id, presence: true 
	belongs_to :user,
	class_name: "User",
	foreign_key: :author_id, 
	primary_key: :id


end

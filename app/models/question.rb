class Question < ActiveRecord::Base
	validates :title, :author_id, presence: true 
end

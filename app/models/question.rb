class Question < ActiveRecord::Base
	validates :title, :user_id, presence: true 
	belongs_to :author,
	class_name: "User",
	foreign_key: :user_id, 
	primary_key: :id
	has_many :answers
	has_many :comments, as: :commentable  

	has_many :taggings
	has_many :tags, through: :taggings
	has_many :upvotes,
	class_name: "QuestionUpvote",
	foreign_key: :question_id,
	primary_key: :id 
	has_many :voters, through: :upvotes, source: :user  

	def self.find_by_substring(str)
		Question.limit(5).where("LOWER(title) LIKE '%#{str.downcase}%'")
	end

	def assign_tags(tag_names) 
		tag_names.each {|tag_name| self.tags << Tag.find_or_create_by({name: tag_name})}
	end


end

class User < ActiveRecord::Base
	validates :username, :password_digest, :session_token, presence: true 
	validates :password, length: { minimum: 6, allow_nil: true}
	validates :username, uniqueness: true 

	attr_reader :password

	has_many :questions
	has_many :answers
	has_many :answered_questions, through: :answers, source: :question  
	has_many :user_tags
	has_many :tags, through: :user_tags, source: :tag
	has_many :comments 
	has_many :q_upvotes,
	class_name: "QuestionUpvote",
	foreign_key: :user_id,
	primary_key: :id 

	has_many :voted_questions, through: :q_upvotes, source: :question 

	has_many :a_upvotes,
	class_name: "AnswerUpvote",
	foreign_key: :user_id,
	primary_key: :id 

	has_many :voted_answers, through: :a_upvotes, source: :answer 

	after_initialize :ensure_session_token

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user && user.valid_password?(password)
		user
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def valid_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_token!
		self.session_token = SecureRandom.urlsafe_base64(16)
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64(16)
	end
end

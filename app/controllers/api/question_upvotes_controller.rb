class Api::QuestionUpvotesController < ApplicationController
	def create 
		q_id = params[:upvote][:id] 
		value = params[:upvote][:value]
		id = current_user.id 
		@upvote = QuestionUpvote.new(user_id: id, question_id: q_id, value: value)
		@question = Question.find(q_id) 
		if @upvote.save! 
			render template: "api/questions/show" 
		else
			render json: @comment.errors.full_messages 
		end 
	end

	def destroy 
		user_id = current_user.id
		question_id = params[:upvote][:id]
		@upvote = QuestionUpvote.where(user_id: user_id, question_id: question_id)
		@upvote.destroy(@upvote.first.id)
		@question = Question.find(question_id)
		render template: "api/questions/show" 
	end


end

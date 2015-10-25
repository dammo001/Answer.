class Api::AnswerUpvotesController < ApplicationController

	def create 
		a_id = params[:upvote][:id]
		q_id = params[:upvote][:q_id] 
		value = params[:upvote][:value]
		id = current_user.id 
		@upvote = AnswerUpvote.new(user_id: id, answer_id: a_id, value: value)
		@question = Question.find(q_id) 
		if @upvote.save! 
			render template: "api/questions/show" 
		else
			render json: @comment.errors.full_messages 
		end 
	end

	def destroy 
		user_id = current_user.id
		answer_id = params[:upvote][:id]
		q_id = params[:upvote][:q_id] 
		@upvote = AnswerUpvote.where(user_id: user_id, answer_id: answer_id)
		@upvote.destroy(@upvote.first.id)
		@question = Question.find(q_id)
		render template: "api/questions/show" 
	end


end
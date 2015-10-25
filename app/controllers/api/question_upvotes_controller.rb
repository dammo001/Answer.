class Api::QuestionUpvotesController < ApplicationController
	def create 
		q_id = params[:upvote][:id] 
		id = current_user.id 
		@upvote = QuestionUpvote.new(user_id: id, question_id: q_id)
		if @upvote.save! 
			render template: "api/questions/show" 
		else
			render json: @comment.errors.full_messages 
		end 
	end


	def destroy 
		@upvote = QuestionUpvote.find(params[:upvote][:id])
		@upvote.destroy 
		render template: "api/questions/show" 
	end


end

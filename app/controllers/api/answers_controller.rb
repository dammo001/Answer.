class Api::AnswersController < ApplicationController
	def update
	end

	def create
		@answer = Answer.new(answer_params)
	
		@answer.user_id = current_user.id 
		if @answer.save
			render :show
		else
			render json: @answer.errors.full_messages, status: 422
		end
	end

	def show 
		@answer = Answer.find(params[:id])
		render json: {}
	end


	def destroy
		@answer = Answer.find(params[:id])
		@answer.destroy
		render json: @answer
	end

	private

	def answer_params
		params.require(:answer).permit(:body, :question_id)
	end

end

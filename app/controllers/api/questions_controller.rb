class Api::QuestionsController < ApplicationController
	def create
		@question = Question.new(question_params)
		@question.user_id = current_user.id 
		if @question.save
			render :show
		else
			render json: @question.errors.full_messages, status: 422
		end
	end

	def destroy
		@question = Question.find(params[:id])
		@question.destroy
		render :show
	end

	def index
		@questions = Question.all 
	end

	def show
		@question = Question.find(params[:id])
	end

	def update 
	end

	private

	def question_params
		params.require(:question).permit(:title, :body, :user_id, :location, :views) 
	end

end

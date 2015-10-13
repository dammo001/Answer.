class Api::QuestionsController < ApplicationController
	def create
	end

	def destroy
	end

	def index
		@questions = Question.all 
		render json: @questions
	end

	def show
		render json: @question
	end

	def update 
	end

end

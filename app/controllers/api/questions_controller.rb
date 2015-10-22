class Api::QuestionsController < ApplicationController
	def create
		@question = Question.new(question_params)
		@question.user_id = current_user.id 
		if params[:question][:tags]
			@question.assign_tags(params[:question][:tags])
		end
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
		if params[:tags]
			@questions = [] 
			params[:tags].each do |tag_name|
				@questions.push(Tag.find_by_name(tag_name).questions)
			end
			@questions = @questions.flatten
		elsif params[:search]
			@questions = Question.find_by_substring(params[:search])
		else
			@questions = Question.all 
		end
	end

	def show
		@question = Question.find(params[:id])
	end

	def update 
	end

	private

	def question_params
		params.require(:question).permit(:title, :body, :user_id, :location, :views, :tags ) 
	end

end




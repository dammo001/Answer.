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
				@questions += (Tag.includes(:questions).where("name= ?", tag_name).first.questions)
			end
			@questions = @questions.uniq
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




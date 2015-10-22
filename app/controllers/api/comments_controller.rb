class Api::CommentsController < ApplicationController
  def create
  	@comment = Comment.new(comment_params)
  	@comment.user_id = current_user.id 
    type = comment_params[:commentable_type]
    id = comment_params[:commentable_id] 

    if (type == "Answer")
      @question = Answer.find(id).question
    else 
      @question = Question.find(id) 
    end
 

  	if @comment.save 
  		render template: "api/questions/show" 
  	else 
  		render json: @comment.errors.full_messages  
  	end

  end

  def destroy
  	@comment = Comment.find(params[:comment_id])
    @question = Question.find(params[:questionId])
  	@comment.destroy
  	render template: "api/questions/show" 
  end

  private

  def comment_params 
  	params.require(:comment).permit(:user_id, :body, :commentable_id, :commentable_type)
  end 

end

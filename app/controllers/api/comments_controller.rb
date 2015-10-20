class Api::CommentsController < ApplicationController
  def create
  	@comment = Comment.new(comment_params)
  	@comment.user_id = current_user.id 
  	if @comment.save 
  		render json: @comment 
  	else 
  		render json: @comment.errors.full_messages  
  	end

  end

  def destroy
  	@comment = Comment.find(params[:comment_id])
  	@comment.destroy 
  	render json: @comment 
  end

  private

  def comment_params 
  	params.require(:comment).permit(:user_id, :body, :commentable_id, :commentable_type )
  end 

end

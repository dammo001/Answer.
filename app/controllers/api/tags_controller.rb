class Api::TagsController < ApplicationController
  def index
  	@tags = Tag.all
  end

  def create 
  	if params[:user_tag]
  		UserTag.create(tag_id: Tag.find_by_name(params[:user_tag][:tag_name]).id, user_id: current_user.id )  

  	elsif params[:tagging] 
  		Tagging.create(tag_id: Tag.find_by_name(params[:tagging][:tag_name]).id, question_id: params[:tagging][:question_id])
  	end
  	
  end


end

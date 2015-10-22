class Api::TagsController < ApplicationController
  def index
  	@tags = Tag.all
  end

  def create 
  	if params[:user_tag]
  		@tags = []
  			UserTag.where(user_id: current_user.id).each do |tag|
  				UserTag.destroy(tag)
  			end
  		params[:user_tag][:tag_names].each do |tag_name|
  			UserTag.create(tag_id: Tag.find_by_name(tag_name).id, user_id: current_user.id ) 
  		end
  		params[:user_tag][:tag_names].each do |tag_name|
  			@tags.push(Tag.find_by_name(tag_name))
  		end

  		render :index 
  	elsif params[:tagging] 
  		params[:tagging][:tag_names].each do |tag_name|
	  		Tagging.create(tag_id: Tag.find_by_name(tag_name).id, question_id: params[:tagging][:question_id])
	  	end
	  	render json: params[:user_tag][:tag_names]
  	end
  end
end

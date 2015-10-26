class UsersController < ApplicationController
	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			sign_in(@user)
			redirect_to root_url
		else
			flash.now[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def show
		@user = User.find(params[:id])
		render :show, formats: :json 
	end

	def update
		@user = User.find(params[:id])
		if params[:user][:picture_url]
			@user.picture_url = params[:user][:picture_url]
			@user.save!
			render :show
		else 
			@user.update!(user_params)
			render :show 
		end
	end

	private

	def user_params
		params.require(:user).permit(:password, :username, :picture_url, :email, :bio, :tagline, :display_name)
	end
end

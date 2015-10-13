class StaticPagesController < ApplicationController
	before_action  :require_login 

	def index

	end

	private

	def require_login
		unless signed_in?
			flash[:errors] = ["You must be logged in to access this section"]
			redirect_to new_session_url 
		end
	end


end

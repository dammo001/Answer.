json.extract!(
	answer,
	:body, :user_id, :updated_at, :id, :created_at 
)

json.comments do 
	json.array!(answer.comments) do |comment| 
		json.extract!(
			comment,
			:id, :body, :updated_at, :user_id)
		json.user do 
			json.name comment.user.username 
			json.picture comment.user.picture_url 
		end
	end
end



json.author do 
	json.name answer.author.username
	json.picture answer.author.picture_url 
	json.tagline question.author.tagline  
end


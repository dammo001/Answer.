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

json.upvotes do 
	json.array!(answer.upvotes.map {|upvote| upvote.value}) 
end


json.set! :isVoted, answer.voters.include?(current_user) 



json.author do 
	json.id answer.author.id 
	json.name answer.author.username
	json.picture answer.author.picture_url 
	json.tagline answer.author.tagline  
end


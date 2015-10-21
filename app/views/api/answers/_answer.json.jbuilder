json.extract!(
	answer,
	:body, :user_id, :updated_at, :id, :created_at 
)

json.comments do 
	json.array!(answer.comments) do |comment| 
		json.extract!(
			comment,
				:body, :updated_at, :user_id 
		)
	end
end



json.author do 
	json.name answer.author.username
	json.picture answer.author.picture_url 
end


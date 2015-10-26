json.extract!(
	user, 
	:username, :created_at, :updated_at, :picture_url, :id, :email, :bio, :tagline, :display_name  
)

json.questions do 
	json.array!(user.questions do |question| 
		json.extract!(
			question,
				:title, :id
		)
	end)
end

json.answers do 
	json.array!(user.answers do |answer| 
		json.extract!(
			answer,
				:title, :id
		)
	end)
end


json.tags do 
	json.array!(user.tags.map{|tag| tag.name})
end




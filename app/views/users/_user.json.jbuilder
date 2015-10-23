json.extract!(
	user, 
	:username, :created_at, :updated_at, :picture_url, :id, :email, :bio, :tagline, :display_name  
)


json.tags do 
	json.array!(user.tags.map{|tag| tag.name})
end




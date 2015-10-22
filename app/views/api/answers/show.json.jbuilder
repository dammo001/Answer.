json.extract!(
	@answer,
	:body, :user_id, :updated_at, :id, :created_at 
)

json.author do 
	json.name @answer.author.username
	json.picture @answer.author.picture_url 
end


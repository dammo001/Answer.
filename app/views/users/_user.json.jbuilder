json.extract!(
	user, 
	:username, :created_at, :updated_at, :picture_url, :id
)


json.tags do 
	json.array!(user.tags) do |tag|
		json.partial! 'api/tags/tag', tag:tag
	end
end




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



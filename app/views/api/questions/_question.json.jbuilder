json.extract!(
	question, 
	:title, :body, :user_id, :location, :views, :updated_at, :id, :created_at
)

json.tags do 
	json.array!(question.tags) do |tag|
		json.extract!(
			tag,
				:name
		)
	end
end



if show_answers
	json.answers do 
		json.array!(question.answers) do |answer|
			json.partial! 'api/answers/answer', answer: answer
		end
	end
end



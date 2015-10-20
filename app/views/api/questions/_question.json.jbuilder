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

json.comments do 
	json.array!(question.comments) do |comment| 
		json.extract!(
			comment,
				:body, :updated_at
		)
	end
end


json.author do 
	json.name question.author.username
end

unless question.answers.empty?  
	json.answer question.answers.first.body 
end


if show_answers
	json.answers do 
		json.array!(question.answers) do |answer|
			json.partial! 'api/answers/answer', answer: answer
		end
	end
end



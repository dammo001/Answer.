json.extract!(
	question, 
	:title, :body, :user_id, :location, :views, :updated_at, :id, :created_at
)

json.tags do 
	json.array!(question.tags.map {|tag| tag.name})
end

json.comments do 
	json.array!(question.comments) do |comment| 
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
	json.name question.author.username
	json.picture question.author.picture_url
	json.tagline question.author.tagline 
	json.id question.author.id
	json.display_name question.author.display_name 
end

json.upvotes do 
	json.array!(question.upvotes.map {|upvote| upvote.value}) 
end

json.set! :isVoted, question.voters.include?(current_user) 

json.upvote_value (question.upvotes.map do |upvote|
	upvote.value if upvote.user_id == current_user.id
	end
)

unless question.answers.empty?  
	json.answer question.answers.first.body
	json.answer_count question.answers.length 
end

if show_answers
	json.answers do 
		json.array!(question.answers) do |answer|
			json.partial! 'api/answers/answer', answer: answer
		end
	end
end



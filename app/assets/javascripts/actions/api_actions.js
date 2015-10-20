window.ApiActions = { 
	receiveAllQuestions: function(questions){
		AppDispatcher.dispatch({
			actionType: QuestionConstants.RESET_QUESTIONS,
			questions: questions
		});
	},

	receiveQuestion: function(question){
		AppDispatcher.dispatch({
			actionType: QuestionConstants.QUESTION_RECEIVED,
			question: question
		});
	},

	receiveSearchQuestions: function(questions){
		AppDispatcher.dispatch({
			actionType: SearchConstants.SEARCH_RECEIVED,
			questions: questions
		});
	},

	updateTags: function(tags){
		AppDispatcher.dispatch({
			actionType: UserConstants.TAGS_UPDATED,
			tags: tags 
		});
	},

	createComment: function(comment){
		AppDispatcher.dispatch({
			actionType: CommentConstants.COMMENT_ADDED,
			comment: comment 
		});
	},

	receiveAllTags: function(tags){
		AppDispatcher.dispatch({
			actionType: TagConstants.TAGS_RECEIVED,
			tags: tags 
		});
	},

	addAnswer: function(answer){
		AppDispatcher.dispatch({
			actionType: QuestionConstants.ANSWER_ADDED,
			answer: answer 
		});
	},

	clearSearch: function(){
		AppDispatcher.dispatch({
			actionType: SearchConstants.CLEAR_SEARCH
		});
	},

	removeAnswer: function(answer){
		AppDispatcher.dispatch({
			actionType: QuestionConstants.ANSWER_REMOVED,
			answer: answer
		});
	},

	createQuestion: function(question){ 
		AppDispatcher.dispatch({
			actionType: QuestionConstants.ADD_QUESTION, 
			question: question
		});
	},

	updateUser: function(user){
		AppDispatcher.dispatch({
			actionType: UserConstants.USER_UPDATED,
			user: user 
		});
	},

	receiveUser: function(user){
		AppDispatcher.dispatch({
			actionType: UserConstants.USER_RECEIVED, 
			user: user 
		});
	}
	};
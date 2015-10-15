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

	addAnswer: function(answer){
		AppDispatcher.dispatch({
			actionType: QuestionConstants.ANSWER_ADDED,
			answer: answer 
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

	receiveUser: function(user){
		AppDispatcher.dispatch({
			actionType: UserConstants.USER_RECEIVED, 
			user: user 
		});
	}
	};
window.ApiActions = { 
	receiveAllQuestions: function(questions){
		AppDispatcher.dispatch({
			actionType: QuestionConstants.RESET_QUESTIONS,
			questions: questions
		});
	},

	createQuestion: function(question){ 
		AppDispatcher.dispatch({
			actionType: QuestionConstants.ADD_QUESTION, 
			question: question
		});
	}
	};
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


	createQuestion: function(question){ 
		AppDispatcher.dispatch({
			actionType: QuestionConstants.ADD_QUESTION, 
			question: question
		});
	}
	};
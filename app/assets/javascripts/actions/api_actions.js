window.ApiActions = { 
	receiveAllQuestions: function(questions){
		AppDispatcher.dispatch({
			actionType: QuestionConstants.RESET_QUESTIONS,
			questions: questions
		});
	}};
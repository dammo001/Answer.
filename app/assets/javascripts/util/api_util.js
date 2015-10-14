ApiUtil = {
	fetchQuestions: function(){ 
		$.ajax({
			url: "/api/questions",
			type: "GET",
			success: function (questions){
				ApiActions.receiveAllQuestions(questions);
			}
		});
	},


	createQuestion: function(params){ 
		$.ajax({
			url: "/api/questions",
			type: "POST",
			data: params,
			success: function (question){ 
				ApiActions.createQuestion(question);
			}

		});
	}
};
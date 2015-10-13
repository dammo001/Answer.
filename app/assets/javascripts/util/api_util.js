ApiUtil = {
	fetchQuestions: function(){ 
		$.ajax({
			url: "/api/questions",
			type: "GET",
			success: function (questions){
				ApiActions.receiveAllQuestions(questions);
			}
		});
}};
ApiUtil = {
	fetchQuestions: function(){ 
		$.ajax({
			url: "api_questions_url",
			method: "GET",
			success: function (questions){
				ApiActions.receiveAllQuestions(questions);
			}
		});
}};
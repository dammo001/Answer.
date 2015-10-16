ApiUtil.Tag = { 
	filterByTag: function(tag){ 
		$.ajax({
			url: "/api/questions",
			type: "GET",
			data: {tag_id: tag},
			success: function (questions){
				ApiActions.receiveAllQuestions(questions)
			}
		});
	}
};
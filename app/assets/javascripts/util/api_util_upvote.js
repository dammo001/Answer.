ApiUtil.Upvote = { 
	voteQuestion: function(params){ 
		$.ajax({
			url: "/api/question_upvotes",
			type: "POST",
			data: params,
			success: function (question){
				ApiActions.setComment(question);
			}
		});
	}
};
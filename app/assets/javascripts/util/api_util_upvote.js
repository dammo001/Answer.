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
	},

	unVoteQuestion: function(params){
		$.ajax({
			url: "/api/question_upvotes",
			type: "GET",
			data: params,
			success: function (question){
				ApiActions.setComment(question);
			}
		});
	}
};
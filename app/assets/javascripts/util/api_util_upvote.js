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
	},

	voteAnswer: function(params){ 
		$.ajax({
			url: "/api/answer_upvotes",
			type: "POST",
			data: params,
			success: function (answer){
				ApiActions.setComment(answer);
			}
		});
	},

	unVoteAnswer: function(params){
		$.ajax({
			url: "/api/answer_upvotes",
			type: "GET",
			data: params,
			success: function (answer){
				ApiActions.setComment(answer);
			}
		});
	}
};
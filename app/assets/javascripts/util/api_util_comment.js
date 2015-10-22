ApiUtil.Comment = {

	createComment: function(params) {
		$.ajax({
			url: "/api/comments",
			type: "POST",
			data: params,  
			success: function (question){
				ApiActions.setComment(question);
			}
		});
	},

	destroyComment: function(params) { 
		$.ajax({
			url: "api/comments/"+params.comment_id,
			type: "DELETE",
			data: params, 
			success: function (question){
				ApiActions.setComment(question); 
			}
		});
	}
};
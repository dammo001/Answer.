ApiUtil.Comment = {

	createComment: function(params) {
		$.ajax({
			url: "api/comments",
			type: "POST",
			data: params,  
			success: function (comment){
				ApiActions.createComment;
			}
		});
	}
};
ApiUtil.Answer = {

	createAnswer: function(params) {
		$.ajax({
			url: "/api/answers/",
			type: "POST",
			data: params,
			success: function (){
				ApiActions.updateQuestion;
				location.reload(true);
			}
		});
	},

	destroyAnswer: function(id) {
		$.ajax({
			url: "/api/answers/" + id,
			type: "DELETE",
			success: function(){
				ApiActions.updateQuestion;
				location.reload(true);
			}
		});
	}
};




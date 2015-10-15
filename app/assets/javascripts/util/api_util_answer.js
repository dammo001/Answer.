ApiUtil.Answer = {

	createAnswer: function(params) {
		$.ajax({
			url: "/api/answers/",
			type: "POST",
			data: params,
			success: function (answer){
				ApiActions.addAnswer(answer);
			}
		});
	},

	destroyAnswer: function(id) {
		$.ajax({
			url: "/api/answers/" + id,
			type: "DELETE",
			success: function(answer){
				ApiActions.removeAnswer(answer);
			}
		});
	}
};




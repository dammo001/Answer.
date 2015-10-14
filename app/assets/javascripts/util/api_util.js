ApiUtil = {
	fetchQuestions: function(){ 
		$.ajax({
			url: "/api/questions",
			type: "GET",
			success: function (questions){
				ApiActions.receiveAllQuestions(questions);
			}
		});
	},

	fetchSingleQuestion: function(id){
		$.ajax({
			url: "/api/questions/" + id,
			type: "GET",
			success: function(question){
				ApiActions.receiveQuestion(question);
			}
		});
	},

	destroySession: function(id) {
		$.ajax({
			url: "/session",
			type: "DELETE",
			data: id,  
			success: function (){
				window.location = "/";
			}
		});
	},

	destroyQuestion: function(id) {
		$.ajax({
			url: "/api/questions/" + id,
			type: "DELETE",
			success: function(){
				window.location = "/"; 
			}
		});
	},


	createQuestion: function(params){ 
		$.ajax({
			url: "/api/questions",
			type: "POST",
			data: params,
			success: function (question){ 
				ApiActions.createQuestion(question);
			}
		});
	}
};
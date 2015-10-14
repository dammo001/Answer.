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

	editQuestion: function(id, params) { 
		$.ajax({ 
			url: "/api/questions/" + id + "/edit",
			type: "PATCH",
			data: params,
			success: function(question){ 
				ApiActions.receiveQuestion(question);
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
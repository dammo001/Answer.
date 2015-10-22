ApiUtil.Question = { 

	createQuestion: function(params){ 
		$.ajax({
			url: "/api/questions",
			type: "POST",
			data: params,
			success: function (question){ 
				ApiActions.createQuestion(question);
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

	searchQuestions: function(params){
		$.ajax({
			url: "/api/questions/",
			type: "GET",
			data: params, 
			success: function(questions){
				ApiActions.receiveSearchQuestions(questions); 
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

	fetchQuestionsByTag: function(tags){ 
		debugger;
		$.ajax({
			url: "/api/questions",
			type: "GET",
			data: {tags: tags}, 
			success: function (questions){
				debugger;
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
	}

};
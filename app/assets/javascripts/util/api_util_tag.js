ApiUtil.Tag = { 
	filterByTag: function(tag){ 
		debugger;
		$.ajax({
			url: "/api/questions",
			type: "GET",
			data: {tags: [tag]},
			success: function (questions){
				debugger;
				ApiActions.receiveAllQuestions(questions);
			}
		});
	},

	getTags: function(){
		$.ajax({ 
			url: "/api/tags",
			type: "GET",
			success: function(tags){
				ApiActions.receiveAllTags(tags);
			}
		});
	},


	updateQuestionTags: function(params){
		$.ajax({
			url:"/api/tags",
			type: "POST",
			data: {tagging: {tag_names: params}},
			success: function(question){ 
				ApiAction.updateQuestion(question); 
			}
		});
	},

	updateUserTags: function(params){
		$.ajax({
			url: "/api/tags",
			type: "POST",
			data: {user_tag: {tag_names: params}}, 
			success: function(tags){
						console.log(tags)
				ApiActions.updateTags(tags); 
			}
		});
	 }
};

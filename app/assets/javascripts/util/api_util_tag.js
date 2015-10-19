ApiUtil.Tag = { 
	filterByTag: function(tag){ 
		$.ajax({
			url: "/api/questions",
			type: "GET",
			data: {tag_id: tag},
			success: function (questions){
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

	updateUserTags: function(params){
		$.ajax({
			url: "/api/tags",
			type: "POST",
			data: {user_tag: {tag_names: params}}, 
			success: function(tags){
				ApiActions.updateTags(tags); 
			}
		});
	 }
};

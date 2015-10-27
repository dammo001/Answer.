ApiUtil.User = { 
	fetchUser: function(id){ 
		$.ajax({
			url: "/users/"+ id,
			type: "GET",
			success: function (user){
				ApiActions.receiveUser(user);
			}
		});
	},

	showUser: function(id){ 
		$.ajax({
			url: "/users/"+ id,
			type: "GET",
			success: function (user){
				ApiActions.showUser(user);
			}
		});
	},

	updateUser: function(params){
		$.ajax({
			url: "/users/" + params.user.id,
			type: "PATCH",
			data: params,
			success: function (user){
				ApiActions.updateUser(user);
			}
		});
	},

	updateShowUser: function(params){
		$.ajax({
			url: "/users/" + params.user.id,
			type: "PATCH",
			data: params, 
			success: function (user){
				ApiActions.showUser(user);
			}
		});
	}
};
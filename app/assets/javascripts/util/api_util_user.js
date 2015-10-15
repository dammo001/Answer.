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
};
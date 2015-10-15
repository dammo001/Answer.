ApiUtil.User = { 
	fetchUser: function(id){ 
		$.ajax({
			url: "/api/user/"+ id,
			type: "GET",
			success: function (user){
				ApiActions.receiveUser(user);
			}
		});
	},
};
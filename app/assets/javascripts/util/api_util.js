ApiUtil = {

	destroySession: function(id) {
		$.ajax({
			url: "/session",
			type: "DELETE",
			data: id,  
			success: function (){
				window.location = "/";
			}
		});
	}
};
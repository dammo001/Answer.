UserProfile = React.createClass({

	componentDidMount: function(){
	  		$('#upload_widget_opener').cloudinary_upload_widget(
		    { cloud_name: 'djp2nuknn', upload_preset: 'rmy5aved', 
		      cropping: 'server', 'folder': 'user_photos' },
		    function(error, result) { 
		    	if (!error){
		    	ApiUtil.User.updateUser({user: {id: UserStore.all().id , picture_url: result[0].url}});} 
		    });
	},

	render: function(){

		return (
			<div className="profile-container"> 
				<div> Profile Picture: 
					<div className="container-fluid"> 
						<image src={UserStore.all().picture_url}> </image> 
					</div>   
				</div> 
				<div> Biography: </div> 
				<div> User Statistics </div> 
				


				<div> <a href="/#/addpicture" id="upload_widget_opener">Upload image</a> </div> 
				
			</div> 
			)
	}
})




UserProfile = React.createClass({

	getInitialState: function(){
		return ({
			user: UserStore.all()
		});
	},

	componentDidMount: function(){
		UserStore.addChangeHandler(this.change);
		$('#upload_widget_opener').cloudinary_upload_widget(
		    { cloud_name: 'djp2nuknn', upload_preset: 'rmy5aved', 
		      cropping: 'server', 'folder': 'user_photos' },
		    function(error, result) { 
		    	if (!error){
		    	ApiUtil.User.updateUser({user: {id: UserStore.all().id , picture_url: result[0].url}});} 
		    });
	},

	change: function(){
		this.setState({ 
			user: UserStore.all()
		});
	},

	render: function(){

		return (
			<div className="profile-container">
				<div className="profile-header"> 
				</div> 
				<div className="profile-body"> 
					<div className="profile-left-div">
						<div className="profile-picture"> 
							<image src={UserStore.all().picture_url}> </image>
							<div className="profile-upload-widget"> <a href="/#/addpicture" id="upload_widget_opener">Upload image</a> </div> 
						</div> 
						<div className="profile-information">
							<div className="profile-biography"> 
								Biography: {this.state.user.bio} 
							</div> 
							<div className="profile-other-details"> 
								Tagline: {this.state.user.tagline}
								Display name: {this.state.user.display_name}
								User since:  {jQuery.timeago(this.state.user.created_at)}
								Update your information: <UpdateUser user={this.state.user} /> 
							</div> 
						</div> 
					</div> 
					<div className="profile-statistics"> 
						<h2 className="profile-statistics"> 
							Your History 
						</h2> 
					</div> 
				</div> 
				<div className="profile-footer"> 
				</div> 
			</div> 
		) 
	}
})




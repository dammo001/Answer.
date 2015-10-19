ShowUser = React.createClass({ 
	mixins: [ReactRouter.History],

	getInitialState: function(){
		return ({
			user: UserStore.all()
		});
	},

	componentDidMount: function(){ 
		UserStore.addChangeHandler(this.change); 
		ApiUtil.User.fetchUser(window.CURRENT_USER_ID); 
	},

	change: function(){ 
		this.setState({user: UserStore.all()});
	},

	showProfile: function(){
		this.history.pushState(null, "/users"); 
	},

	render: function(){
		var picture; 
		if (this.state.user){
			return(
				<div onClick={this.showProfile} className="user-profile-link pull-right">
				<img id="picture-image" src={this.state.user.picture_url}/> 
				</div> 
				)
		} else {
			return(<div></div>);
		}

		// return ( 
		// 		{picture}
		// )
	}
})

				// <button className="btn" id="nav-show-user" onClick={this.showProfile}>User</button> 

	// <img className="user-profile-link" id="profile-pic" src={this.state.user.picture_url}/>
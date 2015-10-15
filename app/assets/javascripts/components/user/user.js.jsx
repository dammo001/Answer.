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
		return ( 
			<div className="user-profile-link"> 
				<button className="btn" id="nav-show-user" onClick={this.showProfile}>User</button> 
			</div> 
		)
	}
})



UserProfile = React.createClass({
	mixins: [ReactRouter.History],

	getInitialState: function(){
		return ({
			user: UserStore.show()
		});
	},

	componentDidMount: function(){
		ApiUtil.User.showUser(this.props.params.userId); 
		UserStore.addChangeHandler(this.change);
		$('#upload_widget_opener').cloudinary_upload_widget(
		    { cloud_name: 'djp2nuknn', upload_preset: 'rmy5aved', 
		      cropping: 'server', 'folder': 'user_photos' },
		    function(error, result) { 
		    	if (!error){
		    	ApiUtil.User.updateUser({user: {id: UserStore.show().id , picture_url: result[0].url}});} 
		    });
	},

	change: function(){
		this.setState({ 
			user: UserStore.show()
		});
	},

	showQuestion: function(id){
		this.history.pushState(null, '/questions/' + id);
	},

	render: function(){
		var picture_url; 
		var bio;
		var tagline; 
		var created_at;
		var display_name; 
		var update_user;
		var answered_questions;
		var questions; 
		var that = this;
		if (this.state.user){ 
			questions = (
				<ul> 
				{this.state.user.questions.map(function(question, idx){
					var id = question.id
					return (
						<li onClick={that.showQuestion.bind(null,id)} key={idx}> {question.title} </li> 
						)
				})}
				<br/> </ul> 
			);
		} else { 
			questions= ""
		}

		if (this.state.user){ 
			answered_questions = (
				<ul> 
				{this.state.user.answered_questions.map(function(question, idx){
					var id = question.id
					return (
						<li onClick={that.showQuestion.bind(null,id)} key={idx}> {question.title} </li> 
						)
				})}
				<br/> </ul> 
			);
		} else { 
			answered_questions= ""
		}

		if (this.state.user){
			picture_url = this.state.user.picture_url; 
			bio = this.state.user.bio;
			tagline = this.state.user.tagline;
			created_at = this.state.user.created_at;
			display_name = this.state.user.display_name;
		} else { 
			picture_url = "";
			bio = "";
			tagline = "";
			created_at = "";
			display_name = ""; 
		}

		if (this.state.user && (parseInt(this.props.params.userId) === UserStore.user().id )){
			update_user = <UpdateUser user={this.state.user}/>;
		} else {
			update_user = "" 
		}

		return (
			<div className="profile-container clearfix">
				<div className="profile-header"> 
				</div> 
				<div className="profile-body"> 
					<div className="profile-left-div">
						<div className="profile-picture"> 
							<image className="profile-picture" src={picture_url}> </image>
							<div className="profile-upload-widget"> <a href="/#/addpicture" id="upload_widget_opener">Upload image</a> </div> 
						</div> 
						<div className="profile-information">
							<div className="profile-biography"> 
								Biography: {bio} 
							</div> 
							<div className="profile-other-details"> 
								Tagline: {tagline}<br/> 
								Display name: {display_name}<br/> 
								User since:  {jQuery.timeago(created_at)}<br/> 
								{update_user}
							</div> 
						</div> 
					</div> 
					<div className="profile-statistics"> 
						<div className="profile-statistics-header"> 
							<h2>Your History </h2> 
						</div> 
						<div className="profile-statistics-body">
							<div className="user-profile-questions"> 
								Questions you have asked: 
								 {questions} 
								 <br/> 
							</div> 
							Questions you have answered: {answered_questions}  <br/> 
							Users following you: <br/> 
							Users you are following: 
						</div> 
						<div className="profile-statistics-footer">
						</div> 
					</div> 
				</div> 
				<div className="profile-footer"> 
				</div> 
			</div> 
		) 
	}
})




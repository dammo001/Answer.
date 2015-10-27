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
	},

	componentWillUnmount: function(){
		UserStore.removeChangeHandler(this.change);
	},

	change: function(){
		console.log("this changed")
		this.setState({ 
			user: UserStore.show()
		});
	},

	componentDidUpdate: function(){
		if ((document).getElementsByClassName('cloudinary-button').length === 0) {
					$('#upload_widget_opener').cloudinary_upload_widget(
		    { cloud_name: 'djp2nuknn', upload_preset: 'rmy5aved', theme: 'minimal', cropping: 'server', 'folder': 'user_photos' },
		    function(error, result) { 
		    	if (!error){
		    	ApiUtil.User.updateShowUser({user: {id: UserStore.show().id , picture_url: result[0].url}});} 
		});
		}

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
		var picture_id;
		var question_count = 0;
		var answer_count = 0;
		var that = this;
		if (this.state.user){ 
			questions = (
				<ul> 
				{this.state.user.questions.map(function(question, idx){
					var id = question.id;
					question_count += 1;
					return (
						<li className="profile-questions-list" onClick={that.showQuestion.bind(null,id)} key={idx}> {question.title} </li> 
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
					var id = question.id;
					answer_count += 1;
					return (
						<li className="profile-questions-list" onClick={that.showQuestion.bind(null,id)} key={idx}> {question.title} </li> 
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
			picture_link =  <a href="/#/addpicture" id="upload_widget_opener">Upload image</a>
		} else {
			update_user = "" 
			picture_link = ""
		}


		return (
			<div className="profile-container clearfix">
				<div className="profile-header"> 
				</div> 
				<div className="profile-body"> 
					<div className="profile-left-div">
						<div className="profile-picture"> 
							<image className="profile-picture" src={picture_url}>	<div className="profile-upload-widget"> {picture_link} </div>  </image>
						</div> 
						<div className="profile-information clearfix">
							<div className="profile-other-details"> 
								<h3 className="profile-other-details"> Stats </h3> 
								Questions: {question_count}<br/>
								Answers: {answer_count} <br/> 
							</div> 
						</div> 
					</div> 
					<div className="profile-right-div"> 
						<div className="profile-right-div-header"> 
							<h2 className="profile-right-div-header-top"> {display_name} </h2> 
							<h4 className="profile-right-div-header-top"> {tagline} </h4> 
							<div className="profile-right-div-header-middle">
								{bio}
							</div>
							<div className="profile-right-div-header-bottom"><br/>
								<p id="profile-right-div-header-bottom"> user since {jQuery.timeago(created_at)}</p>
								{update_user} 
							</div>  
						</div> 
						<div className="profile-right-div-body">
							<div className="user-profile-questions"> 
								<h3 className="user-profile-questions-list"> Asked Questions </h3> <br/> 
								 <p className="user-profile-questions"> {questions} </p> 
								 <br/> 
							</div> 
							<div className="user-profile-answers"> 
								<h3 className="user-profile-questions-list"> Answered Questions </h3> <br/> 
								 <p className="user-profile-questions"> {answered_questions} </p>   <br/> 
							</div> 
						</div> 
						<div className="profile-info-footer">
						</div> 
					</div> 
				</div> 
				<div className="profile-footer"> 
				</div> 
			</div> 
		) 
	}
})




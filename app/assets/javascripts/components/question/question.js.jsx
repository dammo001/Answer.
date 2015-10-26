var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button; 


Question = React.createClass({ 

	mixins: [ReactRouter.History],

	getStateFromStore: function(){
		return { question: ShowQuestionStore.all() };
	},

	_onChange: function() { 
		this.setState(this.getStateFromStore());
	},

	removeQuestion: function() { 
		if (confirm("Are you sure you want to delete this question?")){
		ApiUtil.Question.destroyQuestion(this.props.params.questionId);
		}
	},

	editQuestion: function(){
		alert("this feature is not yet implemented");
	},

	addAnswer: function(){ 
		this.history.pushState(null, "questions/"+ this.state.question.id +"/answers/new");
	},

	componentDidMount: function() {
		ShowQuestionStore.addChangeHandler(this._onChange);
		ApiUtil.Question.fetchSingleQuestion(parseInt(this.props.params.questionId));
	},

	showUser: function(){
		this.history.pushState(null, "/users/"+ this.state.question.author.id);
	},

	componentWillUnmount: function(){
		ShowQuestionStore.removeChangeHandler(this._onChange);
	},

	render: function(){ 
		var name;
		if (this.state){
			if (this.state.question.author.display_name){
				name = this.state.question.author.display_name;
			} else {
				name = this.state.question.author.name; 
			}
		} else { 
			name = "";
		}

		//refactor later as if... (return empty div) else... (return good stuff) 
		var title = (
			this.state ? this.state.question.title : "" );
		var body = (
			this.state ? this.state.question.body : "" );
		var answers = (
			this.state ? this.state.question.answers : ""); 
		var id = (
			this.state ? this.state.question.id : ""); 
		var picture = (
			this.state ? this.state.question.author.picture : ""); 
		var tagline= (
			this.state ? this.state.question.author.tagline : ""); 
		var time = (
			this.state ? this.state.question.created_at : ""); 
		var deleteButton = (
			<button onClick={this.removeQuestion}>Delete Question</button>);
		var buttonDelete;
		var buttonEdit; 
		var editButton = (
			<button onClick={this.editQuestion}>Edit Question</button>);
		if (this.state){
			buttonDelete = (window.CURRENT_USER_ID === this.state.question.user_id ? deleteButton : "");
			buttonEdit = (window.CURRENT_USER_ID === this.state.question.user_id ? editButton : "" ); 
		};
		var addNewAnswer = <button onClick={this.addAnswer}>Add New Answer!</button>; 

		

		return(
			<div className="question-main"> 
				<div className="question-item"> 
					<h3 className="question-list-title">{title}</h3>
					<div className="question-list-body"> 
						<div className="question-list-picture">
							<img onClick={this.showUser} id="picture-image-index" src={picture}/>
						</div>
						<div className="question-list-side-body"> 
							<div className="question-list-username"> 
								<span className="author-name"> {name}  </span> , <span className="author-tagline"> {tagline}</span> 
							</div> 
							<div className="question-list-time">
								asked {jQuery.timeago(time)}
							</div> 
							<div className="question-body"> 
								<p> {body} </p> 
							</div> 
						</div> 
					</div> 
				</div>
			
				{buttonDelete}{buttonEdit} 
				<AnswerForm questionId={id}/> <br/> 
				
				<h3> Answers</h3> 
				<div>
					<div className="row">
						<div className="col-md4 col"> 
							<AnswerIndex questionId={id} answers={answers} /> 
						</div>
					</div>
				</div>
				<div id="answer-list">
					{this.props.children}
				</div>
			</div> 
			)
	}
});


	
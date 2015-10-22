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
		this.history.pushState(null, "questions/"+ this.state.question.id +"/answers/new")
	},

	componentDidMount: function() {
		ShowQuestionStore.addChangeHandler(this._onChange);
		ApiUtil.Question.fetchSingleQuestion(parseInt(this.props.params.questionId));
	},

	componentWillUnmount: function(){
		ShowQuestionStore.removeChangeHandler(this._onChange);
	},

	render: function(){ 

		//refactor later as if... (return empty div) else... (return good stuff) 

		var title = (
			this.state ? this.state.question.title : "" );
		var body = (
			this.state ? this.state.question.body : "" );
		var answers = (
			this.state ? this.state.question.answers : ""); 
		var id = (
			this.state ? this.state.question.id : ""); 
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
			<div>
			<div className="single-question" > <h2> {title} </h2> <br/>
			<p> {body} </p> 
			<AnswerForm questionId={id}/> <br/> 
			{buttonDelete}{buttonEdit} 
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
			</div>
			)
	}
});


	
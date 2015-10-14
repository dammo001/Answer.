

Question = React.createClass({ 

	getStateFromStore: function(){
		return { question: ShowQuestionStore.all() };
	},

	_onChange: function() { 
		this.setState(this.getStateFromStore());
	},

	removeQuestion: function() { 
		if (confirm("Are you sure you want to delete this question?")){
		ApiUtil.destroyQuestion(this.props.params.questionId);
		}
	},

	editQuestion: function(){
		alert("this feature is not yet implemented");
	},

	componentDidMount: function() {
		ShowQuestionStore.addChangeHandler(this._onChange);
		ApiUtil.fetchSingleQuestion(parseInt(this.props.params.questionId));
	},

	render: function(){ 

		var title = (
			this.state ? this.state.question.title : "" );
		var body = (
			this.state ? this.state.question.body : "" );
		var deleteButton = (
			<button onClick={this.removeQuestion}>Delete Question</button>);
		var buttonDelete;
		var buttonEdit; 
		var editButton = (
			<button onClick={this.editQuestion}>Edit Question</button>);
		if (this.state){
			buttonDelete = (window.CURRENT_USER_ID === this.state.question.author_id ? deleteButton : "");
			buttonEdit = (window.CURRENT_USER_ID === this.state.question.author_id ? editButton : "" ); 
		};

		

		return(
			<div className="single-question"> <h2> {title} </h2> <br/>
			<p> {body} </p> 
			{buttonDelete}{buttonEdit} 
			</div> 
			)
	}
});


	// var display = (
	// 		this.state.question ? this.state.question.title : "" 
	// 		);
// getInitialState: function(){ 
	// 	return this.getStateFromStore();
	// },

	// componentWillReceiveProps: function(newProps) {
	// 	ApiUtil.fetchSingleQuestion(parseInt(newProps.params.questionId)); 
	// },

	// componentWillUnmount: function() { 
	// 	QuestionStore.removeQuestionDetailChangeHandler(this._onChange);
	// },
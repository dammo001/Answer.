Question = React.createClass({ 

	getStateFromStore: function(){
		return { question: ShowQuestionStore.all() };
	},

	

	_onChange: function() { 
		this.setState(this.getStateFromStore());
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
	

		return(
			<div className="single-question"> <h2> {title} </h2> <br/>
			<p> {body} </p> 
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
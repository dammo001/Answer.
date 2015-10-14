Question = React.createClass({ 
	getStateFromStore: function(){
		return { question: QuestionStore.find(parseInt(this.props.params.questionId)) };
	},

	getInitialState: function(){ 
		return this.getStateFromStore();
	},

	_onChange: function() { 
		this.setState(this.getStateFromStore());
	},

	componentWillReceiveProps: function(newProps) {
		ApiUtil.fetchSingleQuestion(parseInt(newProps.params.questionId)); 
	},

	componentDidMount: function() {
		QuestionStore.addQuestionDetailChangeHandler(this._onChange);
		ApiUtil.fetchSingleQuestion(parseInt(this.props.params.questionId));
	},

	componentWillUnmount: function() { 
		QuestionStore.removeQuestionDetailChangeHandler(this._onChange);
	},

	render: function(){ 
		var display = (
			this.state.question ? this.state.question.title : "" 
			);

		return(
			<div id="single-question"> {display} </div> 
			)
	}
});
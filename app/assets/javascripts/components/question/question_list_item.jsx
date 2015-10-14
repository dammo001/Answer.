QuestionListItem = React.createClass({
	mixins: [ReactRouter.History],
	showQuestion: function() {
		this.history.pushState(null, '/questions/' + this.props.question.id, {});
	},


	render: function(){
		return (
			<li onClick={this.showQuestion} className="question-item"> {this.props.question.title} </li> )
	}
});


QuestionListItem = React.createClass({
	mixins: [ReactRouter.History],
	showQuestion: function() {
		this.history.pushState(null, '/questions/' + this.props.question.id, {});
	},


	render: function(){
		return (
			<li 
			onClick={this.showQuestion} 
			className="question-item"> 
			<h3>{this.props.question.title}</h3>
			 was asked {jQuery.timeago(this.props.question.updated_at)}
			</li> 
		)
	}
});


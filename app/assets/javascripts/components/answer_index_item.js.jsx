AnswerIndexItem = React.createClass({ 
	mixins: [ReactRouter.History], 

	showComments: function(){ 

	},

	render: function(){ 
		return (
			<li onClick={this.showComments} className="answer-index-item"> 
			{this.props.answer.updated_at}
			{this.props.answer.user_id}
			{this.props.answer.body} 
			</li> 
			)
	}
});
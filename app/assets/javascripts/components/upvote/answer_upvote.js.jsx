AnswerUpvote = React.createClass({

	getInitialState: function(){
		return({
			upvoted: false,
			downvoted: false
		});
	},

	vote: function(value){
		params = {upvote: {id: this.props.answer.id, value: value, q_id: this.props.questionId}};
		if (this.props.answer.isVoted){
			ApiUtil.Upvote.unVoteAnswer(params);
		} else { 
			ApiUtil.Upvote.voteAnswer(params); 
		}
	},
	
	render: function(){
		var voteTally = 0;
		if (this.props.answer && this.props.answer.upvotes){
			this.props.answer.upvotes.forEach(function(value){
				voteTally += value; 
			});
		}

		return (
			<div className="upvote counter">
			 	<span onClick={this.vote.bind(null, 1)} className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> 
			 	<span className="vote-tally">{voteTally}</span> 
			 	<span onClick={this.vote.bind(null, -1)} className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
		 	</div> 
		 )
	}
})
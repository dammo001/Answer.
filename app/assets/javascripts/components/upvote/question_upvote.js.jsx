QuestionUpvote = React.createClass({

	getInitialState: function(){
		return({
			upvoted: false,
			downvoted: false
		});
	},

	vote: function(value){
		params = {upvote: {id: this.props.question.id, value: value }};
		if (this.props.question.isVoted){
			ApiUtil.Upvote.unVoteQuestion(params);
		} else { 
			ApiUtil.Upvote.voteQuestion(params); 
		}
	},
	
	render: function(){
		var voteTally = 0;
		if (this.props.question && this.props.question.upvotes){
			this.props.question.upvotes.forEach(function(value){
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
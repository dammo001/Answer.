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

		var upvoted = "";
		var downvoted ="";  
		if (this.props.value === 1){
			upvoted = "up"; 
		} else if (this.props.value === -1){
			downvoted = "down"; 
		} 

		return (
			<div className="upvote counter">
			 	<span id={upvoted} onClick={this.vote.bind(null, 1)} className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> 
			 	<span className="vote-tally">{voteTally}</span> 
			 	<span id={downvoted} onClick={this.vote.bind(null, -1)} className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
		 	</div> 
		 )
	}
})
var Panel = ReactBootstrap.Panel ;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

QuestionListItem = React.createClass({
	mixins: [ReactRouter.History],

	showQuestion: function() {
		this.history.pushState(null, '/questions/' + this.props.question.id, {});
		window.scrollTo(0,0); 
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
		var tagNames; 
		if (this.props.question.tags){ 
			tagNames = (
				<ul className="tags-list-index"> 
				{this.props.question.tags.map(function(tag, idx){
					return (
						<li key={idx} className="tag-name-list"> {tag} </li> 
						)
				})}
				<br/> </ul> 
			);
		} else { 
			tagNames = ""
		}
		var comments;

		if (this.props.question.comments){
			comments = (
				<ul> 
				{
					(
					<CommentIndex questionId={this.props.question.id} comments={this.props.question.comments}/>	
					)					
				}
				</ul> 
				);

		} else { 
			comments = ""; 
		}

		var username;

		if (this.props.question.author.display_name){
			username = this.props.question.author.display_name;
		} else {
			username = this.props.question.author.name ;
		}

		return (
			<li className="question-item"> 
				{tagNames} 
				<h3 className="question-list-title" onClick={this.showQuestion}>{this.props.question.title}</h3>
				<div className="question-list-body"> 
					<div className="question-list-picture">
						<img id="picture-image-index" src={this.props.question.author.picture}/>
					</div>
					<div className="question-list-side-body"> 
						<div className="question-list-username"> 
							<span className="author-name"> {username}  </span> , <span className="author-tagline"> {this.props.question.author.tagline}</span> 
						</div> 
						<div className="question-list-time">
							asked {jQuery.timeago(this.props.question.updated_at)}
						</div> 
					</div> 
				</div> 
			 	<div className="answer-teaser"> {this.props.question.body} </div>
			 	<ul className="question-options">  
			 		<li className="question-options"> <button onClick={this.vote.bind(null, 1)} type="button" id="vote" className="btn btn-default btn-sm upvote-btn">Upvote | {voteTally} </button> </li>
			 		<li className="question-options"> <button onClick={this.vote.bind(null, -1)} type="button" id="vote" className="btn btn-default btn-sm upvote-btn">Downvote</button>  </li>
			 		<li className="question-options"> <CommentForm questionId={this.props.question.id} /></li>
			 		<li className="question-options"> {comments} </li>  
		 		</ul> 
			</li> 
		)
	}
});




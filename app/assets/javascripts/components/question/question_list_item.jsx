var Panel = ReactBootstrap.Panel ;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

QuestionListItem = React.createClass({
	mixins: [ReactRouter.History],

	showQuestion: function() {
		this.history.pushState(null, '/questions/' + this.props.question.id, {});
	},

	render: function(){
		var tagNames; 
		if (this.props.question.tags){ 
			tagNames = (
				<ul> 
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



		return (
			<li 
			className="question-item"> 
				{tagNames} 
				<h3 className="question-list-title" onClick={this.showQuestion}>{this.props.question.title}</h3>
			 	<p className="question-list-details">was asked {jQuery.timeago(this.props.question.updated_at)} by&nbsp; <img id="picture-image-index" src={this.props.question.author.picture}/> </p> 
			 	<br/> 
			 	<div className="answer-teaser"> {this.props.question.answer && this.props.question.body} </div>
			 	<ul className="question-options">  
			 		<li className="question-options"> <button type="button" className="btn btn-default upvote-btn">Upvote | 0</button> </li>
			 		<li className="question-options"> <button type="button" className="btn btn-default upvote-btn">Downvote</button>  </li>
			 		<li className="question-options"> <CommentForm questionId={this.props.question.id} /></li>
			 		<li className="question-options"> {comments} </li>  
		 		</ul> 
			</li> 
		)
	}
});




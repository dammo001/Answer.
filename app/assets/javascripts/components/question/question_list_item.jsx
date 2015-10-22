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
				{this.props.question.tags.map(function(tag){
					return (
						<li key={tag} className="tag-name-list"> {tag} </li> 
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
			 		<li> <button type="button" className="btn btn-default upvote-btn">Upvote | 0</button> </li>
			 		<li> <a href="#">Downvote</a></li> 
			 		<li> <CommentForm questionId={this.props.question.id} />  {comments}</li> 
		 		</ul> 
			</li> 
		)
	}
});




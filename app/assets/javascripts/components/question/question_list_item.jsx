

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
						<li className="tag-name-list"> {tag.name} </li> 
						)
				})}
				<br/> </ul> 
			);
		} else { 
			tagNames = ""
		}

		if (this.props.question.comments){
			comments = (
				<ul> 
				{this.props.question.comments.map(function(comment){
					return (
						 <CommentIndexItem comment={comment}/>						)
				})}
				<br/></ul> 
				);
		} else { 
			comments = "" 
		}

		return (
			<li 
			className="question-item"> 
				{tagNames} 
				<h3 onClick={this.showQuestion}>{this.props.question.title}</h3>
			 	was asked {jQuery.timeago(this.props.question.updated_at)} by&nbsp;{this.props.question.author.name}
			 	<br/> 
			 	<div className="answer-teaser"> {this.props.question.answer && this.props.question.body} </div>
			 	<ul className="question-options">  
			 		<li> <button type="button" className="btn btn-default upvote-btn">Upvote | 0</button> </li>
			 		<li> <a href="#">Downvote</a></li> 
			 		<li> {comments} </li> 
		 		</ul> 
			</li> 
		)
	}
});




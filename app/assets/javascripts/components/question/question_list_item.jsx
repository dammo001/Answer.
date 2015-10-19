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

		return (
			<li 
			className="question-item"> 
				{tagNames} 
				<h3 onClick={this.showQuestion}>{this.props.question.title}</h3>
			 	was asked {jQuery.timeago(this.props.question.updated_at)} by   
			 	{this.props.question.author.name}
			 	<br/> 
			 	<p className="answer-teaser"> {this.props.question.answer} </p>
			 	<ul className="question-options">  
			 		<li> <button type="button" className="btn btn-default upvote-btn">Upvote | 0</button> </li>
			 		<li> <a href="#">Downvote</a></li> 
			 		<li> <a href="#">Comments</a></li> 
			 		<li> <span className="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span> </li> 
		 		</ul> 
			</li> 
		)
	}
});


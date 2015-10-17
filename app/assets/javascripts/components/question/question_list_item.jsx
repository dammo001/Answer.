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
				</ul>
			);
		} else { 
			tagNames = ""
		}

		return (
			<li 
			className="question-item"> 
				{tagNames} 
				<h3 onClick={this.showQuestion}>{this.props.question.title}</h3>
			 	was asked {jQuery.timeago(this.props.question.updated_at)}
			</li> 
		)
	}
});


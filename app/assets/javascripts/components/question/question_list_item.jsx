var Panel = ReactBootstrap.Panel ;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

QuestionListItem = React.createClass({
	mixins: [ReactRouter.History],

	showQuestion: function() {
		this.history.pushState(null, '/questions/' + this.props.question.id, {});
		window.scrollTo(0,0); 
	},
	
	showUser: function(){
		this.history.pushState(null, '/users/' + this.props.question.author.id);
	},

	render: function(){
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
						<img onClick={this.showUser} id="picture-image-index" src={this.props.question.author.picture}/>
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
				<div className="question-index-comments-holder clearfix">
			 		<ul className="question-options">  
				 		<li className="question-options"> <QuestionUpvote question={this.props.question}/> </li> 
				 		<li className="question-options"> <CommentForm questionId={this.props.question.id} /></li>
			 		</ul> 
			 		<div className="question-index-comments"> {comments}</div> 
			 	</div> 
			
			</li> 
		)
	}
});




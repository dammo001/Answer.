var Panel = ReactBootstrap.Panel ;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

QuestionListItem = React.createClass({
	mixins: [ReactRouter.History],

	// componentDidMount: function(){
	// 	var a = this.props.question.id;
	// 	var b = ("#"+a);
	// 	var c = $(b).get(0);
	// 	this.setState({editor: new Quill(c)});
	// },

	// componentDidUpdate: function(){
	// 	var answer;
	// 	if (this.props.question.answer){
	// 		answer = this.props.question.answer;
	// 	} else { 
	// 		answer = {};
	// 	}; 
	// 	this.state.editor.setContents(JSON.parse(answer));
	// },

	// show: function(){
	// 	this.state.editor.setContents(JSON.parse(this.props.question.answer));
	// },

	showQuestion: function() {
		this.history.pushState(null, '/questions/' + this.props.question.id, {});
		window.scrollTo(0,0); 
	},
	
	showUser: function(){
		this.history.pushState(null, '/users/' + this.props.question.author.id);
		window.scrollTo(0,0); 
	},

	filterByTag: function(tag){
		window.scrollTo(0,0); 
		ApiUtil.Tag.filterByTag(tag); 
	},

	render: function(){
		var voteValue = 0;
		if (this.props.question.upvote_value){

			this.props.question.upvote_value.map(function(value){
				if ((value === 1) || (value === -1)){
					voteValue = value; 
				}
			});
		}
	
		var tagNames; 
		var that = this; 
		if (this.props.question.tags){ 
			tagNames = (
				<ul className="tags-list-index"> 
				{this.props.question.tags.map(function(tag, idx){
					return (
						<li key={idx} onClick={that.filterByTag.bind(null, tag)} className="tag-name-list"> {tag} </li> 
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
							<span className="author-name"> {username}</span>,<span className="author-tagline"> {this.props.question.author.tagline}</span> 
						</div> 
						<div className="question-list-time">
							asked {jQuery.timeago(this.props.question.updated_at)}
						</div> 
					</div> 
				</div> 
			 	<div className="answer-teaser" id={this.props.question.id}> </div>
				<div className="question-index-comments-holder clearfix">
			 		<ul className="question-options">  
				 		<li className="question-options"> <QuestionUpvote value={voteValue} question={this.props.question}/> </li> 
				 		<li className="question-options"> <CommentForm questionId={this.props.question.id} /></li>
			 		</ul> 
			 		<div className="question-index-comments"> {comments}</div> 
			 	</div> 
			
			</li> 
		)
	}
});




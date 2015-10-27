AnswerIndexItem = React.createClass({ 
	mixins: [ReactRouter.History], 

	removeAnswer: function() { 
		if (confirm("Are you sure you want to delete this answer?")){
		ApiUtil.Answer.destroyAnswer(this.props.answer.id);
		}
	},

	showUser: function(){
		this.history.pushState(null, '/users/' + this.props.answer.author.id);
	},

	componentDidMount: function(){
		var a = this.props.answer.id;
		var b = ("#"+a);
		var c = $(b).get(0);
		this.setState({editor: new Quill(c)});
	},

	editAnswer: function(){
		alert("this feature is not yet implemented");
	},

	componentDidUpdate: function(){
		this.state.editor.setContents(JSON.parse(this.props.answer.body));
	},

	show: function(){
		this.state.editor.setContents(JSON.parse(this.props.answer.body));
	},

	render: function(){ 
		var username;
		if (this.props.answer.author.display_name){
			username = this.props.answer.author.display_name;
		} else {
			username = this.props.answer.author.name ;
		}

		var voteValue = 0;
		if (this.props.answer.upvote_value){

			this.props.answer.upvote_value.map(function(value){
				if ((value === 1) || (value === -1)){
					voteValue = value; 
				}
			});
		}
		var that = this; 
		if (this.props.answer.comments){
			comments = (
				<ul> 
				{
					(
					<CommentIndex questionId={this.props.questionId} comments={this.props.answer.comments}/>	
					)					
				}
				</ul> 
				);

		} else { 
			comments = ""; 
		}
		var editButton = (
			<Button  bsSize="small" id="add-comment" onClick={this.editAnswer}>Edit Answer</Button>);
		var deleteButton = (
			<Button bsSize="small" id="add-comment" onClick={this.removeAnswer}>Delete Answer</Button>);
		var buttonDelete; 
		var buttonEdit;
		var html;		
		if (this.props){
			buttonDelete = (window.CURRENT_USER_ID === this.props.answer.user_id ? deleteButton : "");
			buttonEdit = (window.CURRENT_USER_ID === this.props.answer.user_id ? editButton : "" ); 
		};

		return (
			<li className="list-group-item answer-list">
				<div className="question-list-body"> 
					<div className="question-list-picture">
						<img onClick={this.showUser} id="picture-image-index" src={this.props.answer.author.picture}/>
					</div>
					<div className="question-list-side-body"> 
						<div className="question-list-username"> 
							<span className="author-name">{username}</span>,<span className="author-tagline"> {this.props.answer.author.tagline} </span> 
						</div> 
						<div className="question-list-time">
							answered {jQuery.timeago(this.props.answer.updated_at)}
						</div> 
					</div> 
				</div> 
				<div  onClick={this.show} id={this.props.answer.id}>
				</div> 
				<div className="question-index-comments-holder clearfix">
				 		<ul className="question-options">  
					 		<li className="question-options"> <AnswerUpvote value={voteValue} question={this.props.questionId} answer={this.props.answer}/> </li> 
					 		<li className="question-options"> <CommentForm answerId={this.props.answer.id} /></li>
					 		<li className="question-options">{buttonDelete}</li> 
				 		</ul> 
				 		<div className="question-index-comments">{comments}</div> 
				</div> 
			</li> 
			)
	}
});




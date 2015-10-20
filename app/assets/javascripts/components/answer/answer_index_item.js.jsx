AnswerIndexItem = React.createClass({ 
	mixins: [ReactRouter.History], 

	removeAnswer: function() { 
		if (confirm("Are you sure you want to delete this answer?")){
		ApiUtil.Answer.destroyAnswer(this.props.answer.id);
		}
	},

	getInitialState: function(){
		return ({
			editor2: new Quill('#editor2')
		});
	},
	// addAnswer: function(){ 
	// 	this.history.pushState(null, "questions/"+ this.state.question.id +"/answers/new")
	// },

	addComment: function(){
		this.history.pushState(null, "answers/" + this.props.answer.id + "/comments/new");
	},

	editAnswer: function(){
		alert("this feature is not yet implemented");
	},


	render: function(){ 
		var editButton = (
			<button onClick={this.editAnswer}>Edit Answer</button>);
		var deleteButton = (
			<button onClick={this.removeAnswer}>Delete Answer</button>);
		var buttonComment = (
			<button onClick={this.addComment}>Add Comment</button>); 
		var buttonDelete; 
		var buttonEdit;
		var html;		
		if (this.props){
			buttonDelete = (window.CURRENT_USER_ID === this.props.answer.user_id ? deleteButton : "");
			buttonEdit = (window.CURRENT_USER_ID === this.props.answer.user_id ? editButton : "" ); 

		};

		return (
			<li className="list-group-item answer-list"> 
			{this.props.answer.user_id} answered {jQuery.timeago(this.props.answer.updated_at)}<br/>
			{this.props.answer.body} 
				{buttonDelete}{buttonEdit}{buttonComment}
			</li>
			)
	}
});



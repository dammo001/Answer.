CommentIndexItem = React.createClass({ 
	mixins: [ReactRouter.History], 

	removeComment: function() { 
		if (confirm("Are you sure you want to delete this comment?")){
		ApiUtil.Comment.destroyComment(this.props.comment.id);
		}
	},

	render: function(){ 
		var deleteButton = (
			<button onClick={this.removeAnswer}>Delete Answer</button>);
		var buttonDelete; 	
		if (this.props){
			buttonDelete = (window.CURRENT_USER_ID === this.props.comment.user_id ? deleteButton : "");
		};

		return (
			<li className="list-group-item comment-list"> 
			{this.props.comment.user_id} commented {jQuery.timeago(this.props.comment.updated_at)}<br/>
			{this.props.comment.body} 
				{buttonDelete}
			</li>
			)
	}
});


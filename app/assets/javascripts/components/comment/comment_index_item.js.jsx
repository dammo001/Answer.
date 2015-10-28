CommentIndexItem = React.createClass({ 
	mixins: [ReactRouter.History], 

	removeComment: function() {
		if (confirm("Are you sure you want to delete this comment?")){
			ApiUtil.Comment.destroyComment({comment_id: this.props.comment.id, questionId: this.props.questionId} );
		}
	},

	render: function(){ 
		var deleteButton = (
			<button className="comment-delete-button" onClick={this.removeComment}>Delete Comment</button>);
		var buttonDelete; 	
		if (this.props){
			buttonDelete = (window.CURRENT_USER_ID === this.props.comment.user_id ? deleteButton : "");
		};

		return (
			<li className="comment"> 
				<img id="picture-image-index" src={this.props.comment.user.picture}/>{this.props.comment.user.name} commented {jQuery.timeago(this.props.comment.updated_at)}<br/>
				{this.props.comment.body}<br/> 
				{buttonDelete}
			</li>
			)
	}
});


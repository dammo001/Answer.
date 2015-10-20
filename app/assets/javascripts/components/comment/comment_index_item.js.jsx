var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button; 

CommentIndexItem = React.createClass({ 
	mixins: [ReactRouter.History], 

	getInitialState: function(){
		return {open: false};
	},

	removeComment: function() { 
		if (confirm("Are you sure you want to delete this comment?")){
		ApiUtil.Comment.destroyComment(this.props.comment.id);
		}
	},

	change: function(){
		this.setState({ open: !this.state.open });
	},

	render: function(){ 
		var deleteButton = (
			<button onClick={this.removeAnswer}>Delete Comment</button>);
		var buttonDelete; 	
		if (this.props){
			buttonDelete = (window.CURRENT_USER_ID === this.props.comment.user_id ? deleteButton : "");
		};

		return (
			<li > 
				<Button onClick={this.change}> Show Comments </Button> 
				<Panel collapsible expanded={this.state.open}> 
					{this.props.comment.user_id} commented {jQuery.timeago(this.props.comment.updated_at)}<br/>
					{this.props.comment.body}<br/> 
					{buttonDelete}
				</Panel> 
			</li>
			)
	}
});


AnswerIndexItem = React.createClass({ 
	mixins: [ReactRouter.History], 

	removeAnswer: function() { 
		if (confirm("Are you sure you want to delete this answer?")){
		ApiUtil.Answer.destroyAnswer(this.props.answer.id);
		}
	},

	componentDidMount: function(){
		var a = this.props.answer.id;
		var b = ("#"+a);
		var c = $(b).get(0);
		this.setState({editor: new Quill(c)});
	},

	addComment: function(){
		this.history.pushState(null, "answers/" + this.props.answer.id + "/comments/new");
	},

	editAnswer: function(){
		alert("this feature is not yet implemented");
	},

	componentDidUpdate: function(){
		console.log (this.state) 
		this.state.editor.setContents(JSON.parse(this.props.answer.body));
	},

	show: function(){
		console.log (this.state)
		this.state.editor.setContents(JSON.parse(this.props.answer.body));
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
			<div  onClick={this.show} id={this.props.answer.id}>
			</div> 
				{buttonDelete}{buttonEdit}{buttonComment}
			</li>
			)
	}
});



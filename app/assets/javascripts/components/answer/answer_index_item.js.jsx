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
		var that = this; 
		if (this.props.answer.comments){
			comments = (
				<ul> 
				{
					(
					<CommentIndex questionId={this.props.answer.id} comments={this.props.answer.comments}/>	
					)					
				}
				</ul> 
				);

		} else { 
			comments = ""; 
		}
		var editButton = (
			<button onClick={this.editAnswer}>Edit Answer</button>);
		var deleteButton = (
			<button onClick={this.removeAnswer}>Delete Answer</button>);
		var buttonDelete; 
		var buttonEdit;
		var html;		
		if (this.props){
			buttonDelete = (window.CURRENT_USER_ID === this.props.answer.user_id ? deleteButton : "");
			buttonEdit = (window.CURRENT_USER_ID === this.props.answer.user_id ? editButton : "" ); 
		};

		return (
			<li className="list-group-item answer-list">
			{this.props.answer.author.name} answered {jQuery.timeago(this.props.answer.updated_at)} <img id="picture-image-index" src={this.props.answer.author.picture} /> <br/>
			<div  onClick={this.show} id={this.props.answer.id}>
			</div> 
			<CommentForm answerId={this.props.answer.id} /> 
				{buttonDelete}{buttonEdit}
				{comments}
			</li>
			)
	}
});



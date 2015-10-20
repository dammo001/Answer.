

var CommentForm = React.createClass({
	
	mixins: [ReactRouter.History],	

	getInitialState: function(){
		return ({
			value: "" 
		});
	},

	change: function(event){
		this.setState({value: event.target.value});
	},


	submit: function(event) {
	    event.preventDefault();
		var commentable_id; 
		var commentable_type; 
		if (this.props.params.answerId){
			commentable_id = this.props.params.answerId; 
			commentable_type = "Answer";
		} else { 
			commentable_id = this.props.params.questionId;
			commentable_type = "Question" ;
		}
		debugger; 
	    var comment = { comment: { body: this.state.value , commentable_id: commentable_id, commentable_type: commentable_type }};
	    ApiUtil.Comment.createComment(comment); 
	},

	render: function() {
		return (
			<div className="container container-comment"> 
				<form onSubmit={this.submit}> 
					<textarea value={this.state.value} onChange={this.change} placeholder="Comment here"> </textarea> 
					<input type="submit"> </input> 
				</form> 
			</div>
		)
	}

});

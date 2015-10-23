

var CommentForm = React.createClass({
	
	mixins: [ReactRouter.History],	

	getInitialState: function(){
		return ({
			value: "",
			open: false
		});
	},

	change: function(event){
		this.setState({value: event.target.value});
	},

	flip: function(){
		this.setState({ open: !this.state.open });
	},


	submit: function(event) {
	    event.preventDefault();
		var commentable_id; 
		var commentable_type; 
		if (this.props.answerId){
			commentable_id = this.props.answerId; 
			commentable_type = "Answer";
		} else { 
			commentable_id = this.props.questionId;
			commentable_type = "Question" ;
		}
	    var comment = { comment: { body: this.state.value , commentable_id: commentable_id, commentable_type: commentable_type }};
	    this.flip; 
	    ApiUtil.Comment.createComment(comment); 

	},

	render: function() {
		return (
			<div>
				<Button bsSize="small" id="add-comment" onClick={this.flip}>
					Add Comment 
				</Button> 
				<Panel collapsible expanded={this.state.open}> 
					<form onSubmit={this.submit}> 
						<textarea value={this.state.value} onChange={this.change} placeholder="comment here"></textarea> 
						<input type="submit"> </input> 
					</form> 
				</Panel>
			</div> 
		)
	}

});



	
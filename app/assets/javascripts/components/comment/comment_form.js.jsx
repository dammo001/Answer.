var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button; 
var Panel = ReactBootstrap.Panel; 
var Input = ReactBootstrap.Input; 


var CommentForm = React.createClass({
	
	mixins: [ReactRouter.History],	

	getInitialState: function(){
		return ({
			value: "",
			showModal: false
		});
	},

	change: function(event){
		this.setState({value: event.target.value});
	},

	close: function(){
    	this.setState({ showModal: false });
  	},

  	open: function(){
    	this.setState({ showModal: true }); 
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
	    this.close();
	    ApiUtil.Comment.createComment(comment); 

	},

	render: function() {
		return (
			<div>
				<Button bsSize="small" id="add-comment" onClick={this.open}>
					Add Comment 
				</Button> 
				<Modal className="comment-modal" show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title> Add a comment</Modal.Title> 
					</Modal.Header> 
					<Modal.Body>
						<Input type="textarea" value={this.state.value} onChange={this.change} placeholder="comment here"></Input> 
					</Modal.Body> 
					<Modal.Footer>
						<Button bsSize="large" onClick={this.submit}> Add new comment </Button> 
					</Modal.Footer>
				</Modal> 
			</div> 
		)
	}

});



	
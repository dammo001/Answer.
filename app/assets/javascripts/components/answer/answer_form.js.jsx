AnswerForm = React.createClass({ 
	mixins: [ReactRouter.History],

	createAnswer: function(event){
		event.preventDefault();
		var body = event.target[0].value; 
		var questionId = this.props.params.questionId;
		ApiUtil.createAnswer({answer: {body: body, question_id: questionId} });
		this.history.pushState(null, "/questions/"+questionId);
	},

	render: function(){
		return(
			<form className="answer-form" onSubmit={this.createAnswer}> Answer this question!<br/>
				What's your answer? <textarea name="body"></textarea><br/>
				<input type="submit"></input> 
			</form>
			)
	}
})
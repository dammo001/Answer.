QuestionForm = React.createClass({ 
	
	createQuestion: function(event){
		event.preventDefault();
		var title = event.target[0].value;
		var body = event.target[1].value; 
		ApiUtil.createQuestion({question: {title: title, body: body} });
	},


	render: function(){ 
		return(
			<form className="ask-question" onSubmit={this.createQuestion}>Ask a new question!<br/> 
				Title: <input type="text" placeholder="title goes here" name="title"></input><br/> 
				Body: <textarea name="body"></textarea><br/>
				<input type="submit"></input> 
			</form>  
			)
	}
})
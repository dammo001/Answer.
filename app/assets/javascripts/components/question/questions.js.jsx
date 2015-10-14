Questions = React.createClass({ 

	getInitialState: function(){
		return{
			questions: QuestionStore.all() 
		};
	},

	componentDidMount: function(){
		this.storeChanged();
		ApiUtil.Question.fetchQuestions(); 
	},

	storeChanged: function(){
		QuestionStore.addChangeHandler(this.setQuestions);
	},

	setQuestions: function(){
		this.setState({ questions: QuestionStore.all()});
	},

	render: function(){
		return(
			<div className="question-main"> <h2> What Do You Want To Know? </h2> 
			<ul> 
			{this.state.questions.map(function(question){
				return (
					  <QuestionListItem key={question.id} question={question}/> 
					)
			})}
			</ul> 
			</div>)
	}});
Questions = React.createClass({ 

	getInitialState: function(){
		return{
			questions: QuestionStore.all()
		};
	},

	componentDidMount: function(){
		QuestionStore.addChangeHandler(this.setQuestions);
		UserStore.addTagHandler(this.updateQuestions); 
		this.updateQuestions(); 
	},

	componentWillUnmount: function(){
		QuestionStore.removeChangeHandler(this.setQuestions); 
		UserStore.removeTagHandler(this.updateQuestions);
	},

	updateQuestions: function(){
		var tags;
		tags = UserStore.all() ? UserStore.all().tags : userTags;
		ApiUtil.Question.fetchQuestionsByTag(tags); 
		
	},

	setQuestions: function(){
		this.setState({ questions: QuestionStore.all()});
	},

	render: function(){
		return(
			<div className="question-main" > <h1 className="index-header"> What Do You Want To Know? </h1> 
			<ul> 
			{this.state.questions.map(function(question){
				return (
					  <QuestionListItem key={question.id} question={question}/> 
					)
			})}
			</ul> 
			</div>)
	}});
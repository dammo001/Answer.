AnswerIndex = React.createClass({ 
	render: function(){ 
		var that = this; 
		return(

			<ul> 
				{this.props.answers && this.props.answers.map(function(answer){
					
				return <AnswerIndexItem questionId={that.props.questionId} key={answer.id} answer={answer} /> 
				})}
			</ul> 
			)
	}
})
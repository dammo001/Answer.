AnswerIndex = React.createClass({ 
	render: function(){ 
		return(
			<ul> 
				{this.props.answers && this.props.answers.map(function (answer){
					return <AnswerIndexItem key={answer.id} answer={answer} /> 
				})}
			</ul> 
			)
	}
})
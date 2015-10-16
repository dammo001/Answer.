SearchIndexItem = React.createClass({ 

	mixins: [ReactRouter.History],

	showQuestion: function(event){
		this.history.pushState(null, '/questions/' + this.props.result.id, {});
		ApiActions.clearSearch();
	},

	render: function(){ 
		return ( 
			<li className="list-group-item" id="search-list-item" onClick={this.showQuestion}> 
			{this.props.result.title}
			</li> )

	}
})

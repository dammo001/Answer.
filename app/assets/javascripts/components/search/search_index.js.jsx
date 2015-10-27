var NavbarSearchIndex = React.createClass({ 

	getInitialState: function(){
		return({
			results: SearchStore.all()
		});
	},

	componentDidMount: function(){
		SearchStore.addChangeHandler(this.change);
		SearchStore.addClearHandler(this.change);
	},

	componentWillUnmount: function(){
		SearchStore.removeChangeHandler(this.change); 
		SearchStore.removeClearHandler(this.change); 
	},

	change: function(){
		this.setState({results: SearchStore.all()});
	},

	render: function(){
		var searchResults; 

		if (this.state.results){
			searchResults = (
				this.state.results.map(function(result, idx){
					return (<ul id="search-holder">
							<SearchIndexItem key={idx} result={result} /> </ul> 
							);
				}))
		} else {
				searchResults = ""; 
			} 

		return ( 
			<div className="search-bar-container"> 
				<div>
					<NavbarSearchBar/>
				</div> 
				<div className="search-div">
				
					{searchResults}
				
				</div>
			</div>
			)
	}
})
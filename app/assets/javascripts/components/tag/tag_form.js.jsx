TagForm = React.createClass({ 
	getInitialState: function(){
		return ({ tags: TagStore.all() }); 
	},

	componentDidMount: function(){ 
		ApiUtil.Tag.getTags();
		TagStore.addChangeHandler(this.change);
	},

	componentWillUnmount: function(){
		TagStore.removeChangeHandler(this.change);
	},

	change: function(){
		this.setState({tags: TagStore.all() });
	},

	send: function(){
		debugger; 
	},

	render: function(){
		var tags;
		if (this.state.tags){
			tags = (
				this.state.tags.map(function(tag){
					return (<div>
						<input key={tag.id} value={tag.name} type="checkbox"/>{tag.name}
						</div> 
						 )
						
						
						
						
					}))
		} else { 
			tags = <div/>
		}

		return (
			<div className="container tags-container" onSubmit={this.send}> 
				<form> 
					{tags}
				<input type="submit"/>  
				</form> 
			</div> )
	}
})
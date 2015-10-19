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

	render: function(){
		var tags;
		if (this.state.tags){
			tags = (
				this.state.tags.map(function(tag){
					return (
						<li> {tag.name} </li>
						 );
				}))
		} else { 
			tags = ""
		}

		return (
			<div className="container" > 
				<ul>
				{tags} 
				</ul> 
			</div> )
	}

})
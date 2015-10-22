TagForm = React.createClass({ 
	mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

	getInitialState: function(){
		var tags = {} ;
		TagStore.all() && TagStore.all().forEach(function(tag){
			 (tags[tag] = false);
		});
		return tags; 
	},

	componentDidMount: function(){ 
		ApiUtil.Tag.getTags();
		TagStore.addChangeHandler(this.change);
	},

	componentWillUnmount: function(){
		TagStore.removeChangeHandler(this.change);
	},

	change: function(){
		var tags = {};
		TagStore.all() && TagStore.all().forEach(function(tag){
			 (tags[tag] = false);
		});
		this.setState(tags);
	},

	send: function(){
		event.preventDefault();
		var tagParams = [];
		for (var tag in this.state){
			if (this.state[tag]){
				tagParams.push(tag);
			}
		}
		ApiUtil.Tag.updateUserTags(tagParams);
		this.history.pushState(null, "/"); 

	},

	render: function(){
		var tags;
		var that = this; 
		if (Object.keys(this.state)){
			tags = (
				Object.keys(this.state).map(function(tag, idx){
					return (<div>
						<input key={idx} type="checkbox" checkedLink={that.linkState(tag)}/>{tag}
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
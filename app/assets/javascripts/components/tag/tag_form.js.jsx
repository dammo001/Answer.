var Button = ReactBootstrap.Button;

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


	update: function(event){

	},

	render: function(){
		var tags;
		var that = this; 
	
		if (Object.keys(this.state)){
			tagsAll = (
				Object.keys(this.state).map(function(tag, idx){
					var checked; 
					if (that.state[tag]){
						checked = "checked";
					} else {
						checked = "";
					}
					return (
						<li className="tag-name-list tag-choose"> <input style={{display:"none"}} key={idx} type="checkbox" checkedLink={that.linkState(tag)}/>{tag}
						<span  className="glyphicon glyphicon-tag" aria-hidden="true"></span>
						</li> 
						
						 )
					}))
		} else { 
			tagsAll = <div/>
		}

		return (
			<div className="container tags-container" onSubmit={this.send}> 
				<form className="tags-list-form"><ul>  
					{tagsAll}</ul> 
				<Button bsStyle="primary" bsSize="large" type="submit"> Submit</Button>   
				</form> 
			</div> )
	}
})
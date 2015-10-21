QuestionModalTags = React.createClass({ 
	mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

	getInitialState: function(){
		var tags = {} ;
		TagStore.all() && TagStore.all().forEach(function(tag){
			 (tags[tag.name] = false);
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
			 (tags[tag.name] = false);
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
		var params = {question: {title: this.props.title, body: this.props.body, tags: tagParams }};
		ApiUtil.Question.createQuestion(params) ;
		this.props.close(); 
	},

	render: function(){
		var tags;
		var that = this; 
		if (Object.keys(this.state)){
			tags = (
				Object.keys(this.state).map(function(tag){
					return (<div>
						<input key={tag} type="checkbox" checkedLink={that.linkState(tag)}/>{tag}
						</div> 
						 )
					}))
		} else { 
			tags = <div/>
		}

		return (
			<div className="container tags-container"> 
					{tags}
					<input onClick={this.send} type="submit"/> 
			</div> )
	}
})
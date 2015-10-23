var Button = ReactBootstrap.Button;

QuestionModalTags = React.createClass({ 
	mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

	getInitialState: function(){
		var tags = {} ;
		TagStore.all() && TagStore.all().forEach(function(tag){
			 (tags[tag] = false);
		});
		return ({ tags: tags }); 
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
		this.setState({tags: tags });
	},

	send: function(){
		event.preventDefault();
		var tagParams = [];
		for (var tag in this.state.tags){
			if (this.state.tags[tag]){
				tagParams.push(tag);
			}
		}
		var params = {question: {title: this.props.title, body: this.props.body, tags: tagParams }};
		ApiUtil.Question.createQuestion(params) ;
		this.props.close(); 
	},


	toggle: function(tag){
		var key = tag;
		var tags = this.state.tags;
		tags[key] = !tags[key]; 
		this.setState({ tags: tags });
	},

	render: function(){
		var tags;
		var that = this; 
	
		if (Object.keys(this.state.tags)){
			tagsAll = (
				Object.keys(this.state.tags).map(function(tag, idx){
					
					return (
						<TagListItem key={idx} tag={tag} value={that.state.tags[tag]} toggle={that.toggle}/> 
						 )
					}))
		} else { 
			tagsAll = <div/>
		}

		return (
			<div className="container tags-container-form" onSubmit={this.send}> 
				<div className="tags-list-form">
					<ul>  
						{tagsAll} 
					</ul> 
					<Button bsStyle="primary" bsSize="large" type="submit"> Submit</Button>   
				</div> 
			</div> )
	}
})
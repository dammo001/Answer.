TagIndex = React.createClass({
    mixins: [ReactRouter.History], 

	getInitialState: function(){ 
		return ({
			tags: userTags
		});
	},

	componentDidMount: function(){ 
		UserStore.addTagHandler(this.change); 
	},

	componentWillUnmount: function(){
		UserStore.removeTagHandler(this.change); 
	},

	change: function(){
		this.setState({
			tags: UserStore.user().tags
		});
	},

	addTags: function(){
		this.history.pushState(null, "/tags/new", {}); 
	},

	render: function(){

	var tagsList; 
	if ( this.state.tags ) {
		if (Object.keys(this.state.tags).length === 0){
			tagsList = "";
			this.addTags;
		} else { 
		 tagsList = ( 
			this.state.tags.map(function(tag){
					return( 
						<TagItem key={tag} tag={tag}/> 			
				)}))}
	} else { 
		tagsList = "";
		this.addTags; 
	}
		return (
			<div className="container" id="sidebar-container">
				<div className="sidebar-header"> 
					<h3> Pinned Tags </h3> 
				</div> 
				<div className="sidebar-body clearfix"> 
					<ul className="tag-list"> 
					{tagsList} 
					</ul>
				</div> 
				<div className="sidebar-footer">
					<TagForm/>    
				</div> 
			</div>
			)
	}
})


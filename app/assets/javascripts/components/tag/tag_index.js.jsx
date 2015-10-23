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
			tags: UserStore.all().tags
		});
	},

	addTags: function(){
		this.history.pushState(null, "/tags/new", {}); 
	},

	render: function(){

	var tagsList; 
	if ( this.state.tags ) {
		tagsList = ( 
			this.state.tags.map(function(tag){
					return( 
						<TagItem key={tag} tag={tag}/> 			
				)}))
	} else { 
		tagsList = "";
		this.addTags; 
	}
		return (
			<div className="container" id="sidebar-container">
				<div className="sidebar-header"> 
					<h3> Pinned Tags </h3> 
				</div> 
				<div className="sidebar-body"> 
					<ul className="tag-list"> 
					{tagsList} 
					</ul>
				</div> 
				<div className="sidebar-footer">
					<button onClick={this.addTags} type="button" className="btn btn-default add-tags-btn" id="main-tags-button">
					Edit Tags   <span className="glyphicon glyphicon-edit"/> 
					</button> 
				</div> 
			</div>
			)
	}
})



// When User Logs in, object should be returned containing User's data. On first sign in, they should
// be forced to pick some number of tags, 6? Whatever number is optimal for tag display 
// those tags should be used as FIRST LOAD only. Best way to control that?  ON USER LOG IN? Create a method? 
// FILTER STORE will make GET REQUESTS based upon INPUTS from GPS, TAGS, and SEARCH components 
// FILTER STORE will modify REQUESTS, results will be sent to QUESTION STORE, clicking on any question
// will result in SAME SHOW PAGE. Need to add COMMENTS, UPVOTES, FOLLOWS... mb
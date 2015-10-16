TagIndex = React.createClass({

	getInitialState: function(){ 
		return ({
			tags: userTags
		});
	},

	componentDidMount: function(){ 
		UserStore.addChangeHandler(this.change); 
	},

	change: function(){
		this.setState({
			tags: UserStore.all().tags
		});
	},

	render: function(){

	var tagsList; 

	if ( this.state.tags ) {
		tagsList = ( 
			this.state.tags.map(function(tag){
					return( 
						<TagItem key={tag.id} tag={tag}/> 			
				)}))
	} else { 
		tagsList = ""
	}
		return (
			<div className="container" id="sidebar-container">
				<ul className="tag-list"> 
				{tagsList} 
				</ul> 	
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
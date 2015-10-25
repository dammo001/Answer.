var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button; 
var Panel = ReactBootstrap.Panel; 

TagForm = React.createClass({ 
	mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

	getInitialState: function(){
		var tags = {} ;
		TagStore.all() && TagStore.all().forEach(function(tag){
			 (tags[tag] = false);
		});
		return ({ 
			tags: tags,
			showModal: false
			}); 
	},

	close: function(){
    this.setState({ showModal: false });
  	},

  	open: function(){
    this.setState({ showModal: true }); 
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
		userTags && userTags.forEach(function(userTag){
			tags[userTag] = true;
		});
		TagStore.all() && TagStore.all().forEach(function(tag){
			 if (tags[tag] !== true){tags[tag] = false;}
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
		ApiUtil.Tag.updateUserTags(tagParams);
		this.close(); 
	},


	toggle: function(tag){
		var key = tag;
		var tags = this.state.tags;
		tags[key] = !tags[key]; 
		this.setState({ tags: tags });
		console.log(this.state.tags);
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
		
		return(
	    	<div> 
		        <Button
		        bsStyle="primary"
		        className="btn btn-default add-tags-btn navbar-btn pull-left"
		        id="main-tags-button"
		        onClick={this.open}
		        id="right-nav-button"
		        ><span className="glyphicon glyphicon-edit"/>Edit Tags
		        </Button> 
		        <Modal show={this.state.showModal} onHide={this.close}>
			        <Modal.Header closeButton> 
			          <Modal.Title>What Topics are you interested in Today?</Modal.Title> 
			        </Modal.Header> 
			          <Modal.Body>
			            <Panel> 
			              {tagsAll}
			            </Panel> 
			          </Modal.Body>
			        <Modal.Footer>
			          <Button onClick={this.send}>Submit your tags</Button>
			        </Modal.Footer>
		        </Modal> 
	     	</div>  
      )
	}
})
<<<<<<< HEAD

TagItem = React.createClass({

	filterByTag: function(event){
		debugger;
		ApiUtil.Tag.filterByTag(this.props.tag.id); 
=======
TagItem = React.createClass({

	filterByTag: function(event){

		ApiUtil.Tag.filterByTag(this.props.tag.name) 
>>>>>>> 1a2e91bf299db1eadce5bcaf4588b14c96152a71
	},

	render: function(){
		return ( 
<<<<<<< HEAD
			<li onClick={this.filterByTag} data={this.props.tag.name}>     {this.props.tag.name} &nbsp;
			    <span className="glyphicon glyphicon-tags" aria-hidden="true"></span>
			
=======
			<li onClick={this.filterByTag} data={this.props.tag.name}> {this.props.tag.name}
>>>>>>> 1a2e91bf299db1eadce5bcaf4588b14c96152a71
			</li> 
			)
	}
})

<<<<<<< HEAD

		// ApiUtil.Tag.filterByTag(this.props.tag.name) 
=======
>>>>>>> 1a2e91bf299db1eadce5bcaf4588b14c96152a71

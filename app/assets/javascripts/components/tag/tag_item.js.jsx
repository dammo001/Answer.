TagItem = React.createClass({

	filterByTag: function(event){

		ApiUtil.Tag.filterByTag(this.props.tag.name) 
	},

	render: function(){
		return ( 
			<li onClick={this.filterByTag} data={this.props.tag.name}> {this.props.tag.name}
			</li> 
			)
	}
})


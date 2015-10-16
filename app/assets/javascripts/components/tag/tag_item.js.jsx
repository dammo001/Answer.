
TagItem = React.createClass({

	filterByTag: function(event){
		ApiUtil.Tag.filterByTag(this.props.tag.id); 
	},

	render: function(){
		return ( 
			<li onClick={this.filterByTag} data={this.props.tag.name}>     {this.props.tag.name} &nbsp;
			    <span className="glyphicon glyphicon-tags" aria-hidden="true"></span>
			
			</li> 
			)
	}
})



TagItem = React.createClass({

	filterByTag: function(event){
		ApiUtil.Tag.filterByTag(this.props.tag.id); 
	},

	render: function(){
		return ( 
			<li className="tag-name-list" onClick={this.filterByTag} data={this.props.tag.name}>     {this.props.tag.name} &nbsp;
			    <span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
			
			</li> 
			)
	}
})



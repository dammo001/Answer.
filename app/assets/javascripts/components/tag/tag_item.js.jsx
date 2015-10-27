TagItem = React.createClass({

	filterByTag: function(event){
		window.scrollTo(0,0); 
		ApiUtil.Tag.filterByTag(this.props.tag); 
	},

	render: function(){
		return ( 
			<li className="tag-name-list" onClick={this.filterByTag} data={this.props.tag}>     
				{this.props.tag} &nbsp;
			    <span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
			</li> 
			)
	}
})



TagListItem = React.createClass({

	change: function(){ 
		this.props.toggle(this.props.tag);
	},	

	render: function(){

		var checked; 
		if (this.props.value){
			checked = "checked";
		} else { 
			checked = "" ;
		}

		return 	(
			<li className="tag-name-list tag-choose" id={checked} onClick={this.change} > 
				{this.props.tag}
				&nbsp; <span className="glyphicon glyphicon-tag" aria-hidden="true"></span>
			</li>
			); 
	}

})



// style={{display:"none"}}
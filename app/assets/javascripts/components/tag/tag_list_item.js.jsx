TagListItem = React.createClass({

	getInitialState: function(){ 
		return ({
			checked: this.props.value 
		});
	},

	change: function(){ 
		this.setState({ checked: !this.state.checked });
		this.props.toggle(this.props.tag);
	},	

	render: function(){

		var checked; 
		if (this.state.checked){
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
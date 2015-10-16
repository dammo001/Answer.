var NavbarSearchBar=React.createClass({
  getInitialState: function(){
    return({
        value: "" 
    })
  },

  

  handleChange: function(event){
    this.setState({value: event.target.value});
  },

  render: function() {
    var value = this.state.value; 
    var buttonStyle={ marginLeft:-20,borderLeft:0 };
    var ulStyle={marginLeft:-20,marginTop:12};
    return <form className="navbar-form navbar-left" id="search" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                    <input type="hidden" value="" id="searchin"/>
                </div>
                <span className="dropdown">
                    <button style={buttonStyle} type="button" className="btn btn-white dropdown-toggle text-info-all" data-toggle="dropdown"><span data-bind="label" className="{%if searchin is not defined%}fa fa-users {%elseif searchin==1%}fa fa-users{%else%} fa fa-bell-o{%endif%}"></span> <span className="caret"></span></button>
                        <ul style={ulStyle} className="dropdown-menu">
                            <li data-search="1"><a href="#"><span className="fa fa-users"></span> Search for Users</a></li>
                            <li data-search="2"><a href="#"><span className="fa fa-bell-o"></span> Search in Questions</a></li>
                        </ul>
                </span>
                <button type="submit" className="btn btn-default" id="searchbutton">Submit</button>
            </form>;
  }
});
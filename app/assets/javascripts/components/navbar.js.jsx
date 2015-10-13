var NavbarLeftMenuBar=React.createClass({
render: function() {
    return(<ul className="nav navbar-nav">
                <li><a data-toggle="modal" href="#myModal" id="help">Help</a></li>
                <li> <a href="" className="dropdown-toggle" data-toggle="dropdown">UserName<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li><a href="">Profile</a></li>
                        <li><a href="">Settings</a></li>
                        <li><a href="">History </a></li>
                    </ul>
                </li>
           </ul>);
}
});
var NavbarSearchBar=React.createClass({
render: function() {
    var buttonStyle={ marginLeft:-20,borderLeft:0 };
    var ulStyle={marginLeft:-20,marginTop:12};
    return <form className="navbar-form navbar-left" id="search" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" value=""/>
                    <input type="hidden" value="" id="searchin"/>
                </div>
                <span className="dropdown">
                    <button style={buttonStyle} type="button" className="btn btn-white dropdown-toggle text-info-all" data-toggle="dropdown"><span data-bind="label" className="{%if searchin is not defined%}fa fa-users {%elseif searchin==1%}fa fa-users{%else%} fa fa-bell-o{%endif%}"></span> <span className="caret"></span></button>
                        <ul style={ulStyle} className="dropdown-menu">
                            <li data-search="1"><a href="#"><span className="fa fa-users"></span> Search for Users</a></li>
                            <li data-search="2"><a href="#"><span className="fa fa-bell-o"></span> Search in Status</a></li>
                        </ul>
                </span>
                <button type="submit" className="btn btn-default" id="searchbutton">Submit</button>
            </form>;
}
});

var SignOut = React.createClass({
  render: function() {
    return(
      <div className="signoutlink">
        <a href="link_to_destroy">Sign Out</a>
      </div>
  )
  }

})
var Navbar = React.createClass({
render: function() {
 return(<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
        <div className="navbar-header">
        <a className="navbar-brand" href="{{path('homepage')}}">Answer.</a>
        </div>
        <NavbarLeftMenuBar/>
        <NavbarSearchBar/>
        <SignOut/>
        </div>
        </nav>);
}  
});
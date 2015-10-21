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


var Button = ReactBootstrap.Button; 

var SignOut = React.createClass({
  mixins: [ReactRouter.History],
  
  signOut: function(){ 
    ApiUtil.destroySession(CURRENT_USER_ID);
  },


  render: function() {
    return(
        <Button className="btn btn-default navbar-btn pull-right" bsStyle="primary" id="right-nav-button" onClick={this.signOut}>Sign Out</Button> 
  )
  }

});

var Navbar = React.createClass({
render: function() {
 return(<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-navbar">
            <div className="navbar-header">
              <a className="navbar-brand" id="brand" href="/#/">Answer.</a>
            </div>
            <NavbarLeftMenuBar/>
            <NavbarSearchIndex/>
            <div className="navbar-form">
            <SignOut/>
            <AskQuestion tags={TagStore.all()} />
            <ShowUser/>
            </div>
          </div>
        </nav>);
}  
});
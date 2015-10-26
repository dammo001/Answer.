var NavbarLeftMenuBar=React.createClass({

  getInitialState: function(){
    return ({
      username: "",
      userlink: "" 
    });
  },

  componentDidMount: function(){
    UserStore.addChangeHandler(this.change);
  },


  change: function(){
    this.setState({
      username: UserStore.user().username,
      userlink: "/#/users/"+ UserStore.user().id
    });
  },

  render: function() {

      return(<ul className="nav navbar-nav">
                  <li> <a href="" className="dropdown-toggle" data-toggle="dropdown">{this.state.username}<b className="caret"></b></a>
                      <ul className="dropdown-menu">
                          <li><a href={this.state.userlink}>Profile</a></li>
                          <li><a href={this.state.userlink}>History </a></li>
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
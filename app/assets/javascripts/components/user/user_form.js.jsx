var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button; 
var Panel = ReactBootstrap.Panel; 
var Input = ReactBootstrap.Input; 

var UpdateUser = React.createClass({ 

  getInitialState: function(){
    return { 
      showModal: false,
      display_name: this.props.user.display_name, 
      email: this.props.user.email,
      bio:  this.props.user.bio,
      tagline: this.props.user.tagline
    };
  },

  close: function(){
    this.setState({ showModal: false });
  },

  open: function(){
    this.setState({ showModal: true }); 
  },
  
  updateUser: function(event){
    var params = {user: {id: this.props.user.id, display_name: this.state.display_name , email: this.state.email , bio: this.state.bio , tagline: this.state.tagline}};
    ApiUtil.User.updateShowUser(params);
    this.close(); 
  },

  changeName: function(){
    this.setState({display_name: event.target.value });
  },

  changeEmail: function(){
    this.setState({email: event.target.value }); 
  },

  changeBio: function(){
    this.setState({bio: event.target.value });
  },

  changeTagline: function(){
    this.setState({tagline: event.target.value });
  },

  render: function(){ 
    return(
      <div> 
        <Button
        bsStyle="primary"
        className="btn btn-default"
        onClick={this.open}
        id="right-nav-button"
        > Update Info
        </Button> 
        <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton> 
          <Modal.Title>Update Your Information</Modal.Title> 
        </Modal.Header> 
          <Modal.Body>
            Name: <Input type="text" placeholder="Name" onChange={this.changeName} value={this.state.display_name}/>
            E-mail: <Input type="text" placeholder="E-mail" onChange={this.changeEmail} value={this.state.email}/>
            Tagline: <Input type="text" placeholder="Tagline" onChange={this.changeTagline} value={this.state.tagline}/>
            Biography: <Input type="textarea" placeholder="Tell people a little about yourself" onChange={this.changeBio} value={this.state.bio} name="bio"/>
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.updateUser}>Update Info</Button> <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
        </Modal> 
      </div>  
      )
  }

});

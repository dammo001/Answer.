var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button; 

var AskQuestion = React.createClass({ 

  getInitialState: function(){
    return { showModal: false};
  },

  close: function(){
    this.setState({ showModal: false });
  },

  open: function(){
    this.setState({ showModal: true }); 
  },
  
  createQuestion: function(event){
    event.preventDefault();
    var title = event.target[0].value;
    var body = event.target[1].value; 
    ApiUtil.Question.createQuestion({question: {title: title, body: body} });
    this.close(); 
  },

  render: function(){ 
    return(
      <div> 
        <Button
        bsStyle="primary"
        className="btn btn-default navbar-btn pull-right"
        onClick={this.open}
        id="right-nav-button"
        > New Question
        </Button> 
        <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton> 
          <Modal.Title>Ask a New Question!</Modal.Title> 
        </Modal.Header> 
          <Modal.Body>
          <form onSubmit={this.createQuestion}> 
            Title: <input type="text" placeholder="What's the title of your question?"/><br/>
            Body: <textarea placeholder="What's your question?" name="body"/><br/> 
            <input type="submit"></input> 
          </form> 
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
        </Modal> 
      </div>  
      )
  }

});



var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button; 
var Panel = ReactBootstrap.Panel; 

var AskQuestion = React.createClass({ 

  getInitialState: function(){
    return { 
      showModal: false,
      title: "", 
      body: "" 
    };
  },

  close: function(){
    this.setState({ showModal: false });
  },

  open: function(){
    this.setState({ showModal: true }); 
  },
  
  createQuestion: function(event){
    debugger;
    event.preventDefault();
    var title = event.target[0].value;
    var body = event.target[1].value; 
    ApiUtil.Question.createQuestion({question: {title: title, body: body} });
    this.close(); 
  },

  changeTitle: function(){
    this.setState({title: event.target.value});
  },

  changeBody: function(){
    this.setState({body: event.target.value});
  },

  render: function(){ 
    var tags;
    if (this.state.tags){ 
      tags = this.state.tags; 
    } else { 
      tags = "";
    }
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
            Title: <input type="text" placeholder="Title" onChange={this.changeTitle} value={this.state.title}/><br/>
            Body: <textarea placeholder="What's your question?" onChange={this.changeBody} value={this.state.body} name="body"/><br/> 
            <Panel> 
              <QuestionModalTags title={this.state.title} body={this.state.body} close={this.close}/> 
            </Panel> 
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
        </Modal> 
      </div>  
      )
  }

});



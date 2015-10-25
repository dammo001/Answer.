var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button; 
var Panel = ReactBootstrap.Panel; 
var Input = ReactBootstrap.Input; 

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
        <Modal className="question-modal" show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton> 
          <Modal.Title>Ask a New Question!</Modal.Title> 
        </Modal.Header> 
          <Modal.Body>
            Title: <Input type="text" placeholder="Title" onChange={this.changeTitle} value={this.state.title}/>
            Extra Details: <Input type="textarea" placeholder="Supply additional context for your question" onChange={this.changeBody} value={this.state.body} name="body"/>
            <Panel> 
              <div className="body-header"> 
              What topics is your question associated with? 
              </div> 
              <QuestionModalTags title={this.state.title} body={this.state.body} close={this.close}/> 

            </Panel> 
          </Modal.Body>
        </Modal> 
      </div>  
      )
  }

});



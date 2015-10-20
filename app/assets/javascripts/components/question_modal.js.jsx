var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button; 

var AskQuestion = React.createClass({ 

  getInitialState: function(){
    return { showModal: true};
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
  },

  render: function(){ 
    return(
      <div> 
        <Button
        bsStyle="primary"
        className="btn btn-default navbar-btn pull-right"
        onClick={this.open}
        > New Question
        </Button> 
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
          Title: <input type="text" placeholder="What's the title of your question?"/>
          Body: <textarea placeholder="What's your question?" name="body"/> 
          </Modal.Body>
        </Modal> 
      </div>  
      )
  }

});




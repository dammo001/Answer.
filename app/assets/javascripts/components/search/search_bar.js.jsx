var NavbarSearchBar=React.createClass({
  getInitialState: function(){
    return({
        value: "" 
    });
  },

  handleChange: function(event){
    this.setState({value: event.target.value});
    ApiUtil.Question.searchQuestions(this.state.value); 
  },

  render: function() {
    var value = this.state.value; 

    return <form className="navbar-form navbar-left" id="search" role="search">
                <div className="form-group">
                <input type="text" className="form-control" id="form-control-search" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                <span id="search-icon" className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </div>

            </form>;
  }
});
var NavbarSearchBar=React.createClass({
  getInitialState: function(){
    return({
        value: "", 
        focus: true 
    });
  },

  // focus: function() {
  //   this.setState({focus: true});
  // },

  // blur: function(){
  //   this.setState({focus: false});
  //   ApiActions.clearSearch();
  // },

  componentDidMount: function(){
    SearchStore.addClearHandler(this.clear);
  },

  componentWillUnmount: function(){ 
    SearchStore.removeClearHandler(this.clear); 
  },

  clear: function(){
    this.setState({value: "" });
  },

  handleChange: function(event){
    this.setState({value: event.target.value});
    var params = {search: event.target.value};
    if (event.target.value){
      ApiUtil.Question.searchQuestions(params);
    } else { 
      ApiActions.clearSearch(); 
    }
  },

  render: function() {
    var value; 
    if (this.state.focus){
      value = this.state.value;
    } else {
      value = "";
    }

    return (<form className="navbar-form navbar-left" id="search" role="search">
                <div className="form-group">
                <input type="text" className="form-control" id="form-control-search" placeholder="Search" value={value} onChange={this.handleChange} />
                <span id="search-icon" className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </div>

            </form>)
  }
});
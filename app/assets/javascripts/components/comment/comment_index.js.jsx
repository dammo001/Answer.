var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button; 

CommentIndex = React.createClass({ 
	getInitialState: function(){
		return {
			open: false,
			comments: ""
		};	
	},

	componentDidMount: function(){ 
		CommentStore.addChangeHandler(this.update); 
	},

	componentWillUnmount: function(){
		CommentStore.removeChangeHandler(this.update); 
	},

	change: function(){
		debugger;
		this.setState({ open: !this.state.open });
	},

	update: function(){ 
		CommentStore.all() && this.setState({ comments: CommentStore.all() });
	},

	render: function(){ 
		var that = this; 
		var comment_count = (
			this.props.comments ? this.props.comments.length : "0" );
		return(
			<ul>
				<Button bsSize="small" id="button-index" onClick={this.change}> Show Comments ({comment_count})</Button> 
				<Panel collapsible expanded={this.state.open}> 
				{this.props.comments && this.props.comments.map(function (comment, idx){
				return <CommentIndexItem key={idx} questionId={that.props.questionId} comment={comment} /> 
				})}
				</Panel> 
			</ul> 
			)
	}
})
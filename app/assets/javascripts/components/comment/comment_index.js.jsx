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
		this.setState({ open: !this.state.open });
	},

	update: function(){ 
		CommentStore.all() && this.setState({ comments: CommentStore.all() });
	},

	render: function(){ 
		var that = this; 
		return(
			<ul>
				<Button onClick={this.change}> Show Comments </Button> 
				<Panel collapsible expanded={this.state.open}> 
				{this.props.comments && this.props.comments.map(function (comment){
				return <CommentIndexItem key={comment} questionId={that.props.questionId} comment={comment} /> 
				})}
				</Panel> 
			</ul> 
			)
	}
})
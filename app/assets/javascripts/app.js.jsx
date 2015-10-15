$(function() { 
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;

	var rootEl = document.getElementById('content');


App = React.createClass({ 
	render: function(){
		return (
			<div id="wrapper">
				<div id="outer-content-wrapper">
				<Navbar/> 
				<Sidebar/> 
				<div id="content-wrapper">{this.props.children}</div>
				<Footer/>
				</div> 
			</div>
		)
	}});


	React.render((
		<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Questions}/> 
				<Route path="/questions/new" component={QuestionForm}></Route> 
				<Route path="/questions/:questionId" component={Question}>
					<Route path="answers/new" component={AnswerForm}/>
				</Route>

			</Route>
		</Router> 
		), rootEl); 
});




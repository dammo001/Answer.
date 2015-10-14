$(function() { 
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;

	var rootEl = document.getElementById('content');


App = React.createClass({ 
	render: function(){
		return (
			<div className="app">
				<div>
				<Navbar/>
				</div> 
				{this.props.children}
			</div>
		)
	}});


	React.render((
		<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Questions}/> 
				<Route path="/questions/new" component={QuestionForm}></Route> 
				<Route path="/questions/:questionId" component={Question}></Route> 
			</Route>
		</Router> 
		), rootEl); 
})()




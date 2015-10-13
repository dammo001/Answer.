$(function() { 
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;

	var rootEl = document.getElementById('content');


App = React.createClass({ 
	render: function(){
		return (
			<div className="app">
			<Navbar/>
			<Feed/> 
			</div>
		)
	}});


	React.render((
		<Router>
			<Route path="/" component={App} />
		</Router> 
		), rootEl); 
})()




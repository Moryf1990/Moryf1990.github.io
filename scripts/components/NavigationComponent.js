var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.router.on('route',() => {
		this.forceUpdate();
		});
	},

	render: function() {
	var links = [];
	if (Parse.User.current()) {
	links.push(<li className = "navList" key = {'navlist1'}><a href = "#">HOME</a></li>);
	links.push(<li className = "navList" key = {'navlist2'}><a href = "#leagues">SCHEDULES AND TICKETS</a></li>);
	links.push(<li className = "navList" key = {'navlist3'}><a href = "#sellTickets">SELL TICKETS</a></li>);
	links.push(<li className = "navList" key = {'navlist4'}><a href = "#viewTickets">YOUR TICKETS</a></li>);
	links.push(<li className = "navList" key = {'navlist7'}><a href = "#logout">LOGOUT</a></li>);
	}

	else {
	links.push(<li className = "navList" key = {'navlist1'}><a href = "#">HOME</a></li>);
	links.push(<li className = "navList" key = {'navlist5'}><a href = "#register">REGISTER</a></li>);
	links.push(<li className = "navList" key = {'navlist6'}><a href = "#login">LOGIN</a></li>);
	links.push(<li className = "navList" key = {'navlist2'}><a href = "#leagues">VIEW SCHEDULES AND PURCHASE TICKETS</a></li>);
	}
		return (
			<div>
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Ticket Selling Heaven</a>
				</div>
				
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav ul">
							{links}
						</ul>
				</div>
			</div>
		
		)
	}
});








var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.router.on('route',() => {
			this.forceUpdate();
		})
	},
	render: function() {
		var links = [];
		if (Parse.User.current()) {
			links.push(<li className = "navList" key = {'navlist1'}><a href = "#">HOME</a></li>);
			links.push(<li className = "navList" key = {'navlist2'}><a href = "#leagues">VIEW SCHEDULES AND PURCHASE TICKETS</a></li>);
			links.push(<li className = "navList" key = {'navlist3'}><a href = "#sellTickets">SELL TICKETS</a></li>);
			links.push(<li className = "navList" key = {'navlist4'}><a href = "#viewTickets">VIEW YOUR TICKETS</a></li>);
			links.push(<li className = "navList" key = {'navlist7'}><a href = "#logout">LOGOUT</a></li>);
		}

		else {
			links.push(<li className = "navList" key = {'navlist1'}><a href = "#">HOME</a></li>);
			links.push(<li className = "navList" key = {'navlist5'}><a href = "#register">REGISTER</a></li>);
			links.push(<li className = "navList" key = {'navlist6'}><a href = "#login">LOGIN</a></li>);
			links.push(<li className = "navList" key = {'navlist2'}><a href = "#leagues">VIEW SCHEDULES AND PURCHASE TICKETS</a></li>);	
		}

				return (
			<div className = "col-sm-12">
				<div className = "navigationTitle">
					<ul className = "ul">
						{links}
					</ul>
				</div>
			</div>
		)
	}
});













































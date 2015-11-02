var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return (
			<div className = "col-sm-12">
				<div className = "navigationTitle">
					<ul className = "ul">
						<li className = "navList"><a href = "#">HOME</a></li>
						<li className = "navList"><a href = "#register">REGISTER</a></li>
						<li className = "navList"><a href = "#login">LOGIN</a></li>
						<li className = "navList"><a href = "#leagues">VIEW SCHEDULES AND PURCHASE TICKETS</a></li>
						<li className = "navList"><a href = "#sellTickets">SELL TICKETS</a></li>
						<li className = "navList"><a href = "#viewTickets">VIEW YOUR TICKETS</a></li>
					</ul>
				</div>
			</div>
		)
	}
});
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "col-sm-12">
				<div className = "confirmationComponent">
					<h1 className = "confirmationHeader">Your Tickets Have Been Successfully Purchased</h1>
						<h3 className = "confirmationContent">Congratulations on your purchase!</h3>
						<h3 className = "confirmationContent">Hope you enjoy the game!!</h3>
				</div>
			</div>
		);
	}
});
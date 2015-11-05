var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "col-sm-12">
				<div className = "viewTicketsComponent">
					<h1 className = "viewTicketsHeader">Welcome</h1>
					<h3 className = "viewTicketsContent">These are the tickets you currently have for sale!!!</h3>
					<h3 className = "viewTicketsContent">Click on any of the tickets below to remove them.</h3>
				</div>
			</div>
		)
	}
});
var React = require('react');
var TicketsComponent = require('./TicketsComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<div>{this.props.ticket.get('seat')}</div>
				<div>{this.props.ticket.get('price')}</div>			
			</section>
		);
	}
});
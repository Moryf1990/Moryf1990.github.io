var React = require('react');
var TicketsComponent = require('./TicketsComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				{this.props.ticket.get('seat')}
				{this.props.ticket.get('price')}
			</section>
		);
	}
})
var React = require('react');
var TeamsComponent = require('./TeamsComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
			{this.props.team.get('teamName')}
			</section>
		);
	}
})
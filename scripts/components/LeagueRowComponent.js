var React = require('react');
var LeaguesComponent = require('./LeaguesComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
			{this.props.league.get('leagueName')}
			</section>
		);
	}
})
var React = require('react');
var GamesComponent = require('./GamesComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				{this.props.game.get('startDate')}
				{this.props.game.get('team1')}
				{this.props.game.get('team2')}
				{this.props.game.get('location')}
			</section>
		);
	}
})
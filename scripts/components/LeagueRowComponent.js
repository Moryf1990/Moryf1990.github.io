var React = require('react');
var LeaguesComponent = require('./LeaguesComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<button className = "leagueButton">
					<div className = "leagueList">{this.props.league.get('leagueName')}</div>
						<img src= {this.props.league.get('logo').url()} alt="Smiley face" height="70" width="70" />
				</button>
			</section>
		);
	}
})
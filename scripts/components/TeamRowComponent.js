var React = require('react');
var TeamsComponent = require('./TeamsComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<button className = "teamButton">
					<div className = "teamName">{this.props.team.get('teamName')}</div>
						<img src = {this.props.team.get('teamLogo').url()} alt="Smiley face" height="70" width="70" />
				</button>
			</section>
		);
	}
})
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var LeagueModel = require('../models/LeagueModel');
var LeagueRowComponent = require('./LeagueRowComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {'leagues': []}
	},
	
	componentWillMount: function(e) {
		var leagueQuery = new Parse.Query(LeagueModel);
		leagueQuery.find().then(
			(leagues) => {
				this.setState({leagues: leagues})
			}
		);
	},

	render: function() {
		var allLeagues = this.state.leagues.map(function(league) {
			console.log(league);
			var prefix = '#teams/';
			var url = prefix+league.id;
			return <a className = "leagueLink" href = {url} key = {league.id}><LeagueRowComponent league={league}/></a>
		});
		return (
			<div className = "col-sm-12">
				<div className = "leaguesContainer">
					<div className = "leaguesRow">
					<h1 className = "leaguesHeader">Select a League</h1>
				</div>
				<div>
					<div>
						<h3 className = "leaguesContent">League</h3>
					</div>
					<div className = "leaguesList">
					{allLeagues}
					</div>
					</div>
				</div>
			</div>
		);
	}
});


































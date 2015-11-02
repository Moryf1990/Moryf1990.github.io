var React = require('react');
var LeaguesComponent = require('./LeaguesComponent');
var TeamRowComponent = require('./TeamRowComponent');
var TeamModel = require('../models/TeamModel');
var LeagueModel = require('../models/LeagueModel');
var GamesComponent = require('./GamesComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {'teams': []}
	},

	componentWillMount: function(e) {
		var league = new LeagueModel({objectId: this.props.leagueId});
		var query = new Parse.Query(TeamModel).include('leagues');
		query.equalTo('league', league)
		query.find().then(
				(teams) => {
				this.setState({teams: teams})
				}
			)
		},

	render: function() {
		var allTeams = this.state.teams.map(function(team) {
			var prefix = '#games/';
			var url = prefix+team.id;
			return <a href = {url} key = {team.id}><TeamRowComponent team={team}/></a>
		});
		return(
			<div className = "col-sm-12">
				<div className = "teamsComponent">
					<h1 className = "teamsHeader">Select your team to view their schedule</h1>
					<h3 className = "teamsContent">Team Name</h3>
					<div className = "teamsList">
					{allTeams}
					</div>
				</div>
			</div>
		);
	},
});








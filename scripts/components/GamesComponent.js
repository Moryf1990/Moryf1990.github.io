var React = require('react');
var LeaguesComponent = require('./LeaguesComponent');
var TeamRowComponent = require('./TeamRowComponent');
var GameRowComponent = require('./GameRowComponent');
var TeamsComponent = require('./TeamsComponent');
var TeamModel = require('../models/TeamModel');
var LeagueModel = require('../models/LeagueModel');
var GameModel = require('../models/GameModel');


module.exports = React.createClass({
	getInitialState: function() {
		return {games: []}
	},
	componentWillMount: function(e) {
		var team = new TeamModel({objectId: this.props.teamId});
		var firstTeamQuery = new Parse.Query(GameModel);
		firstTeamQuery.equalTo('team1', team)
		var secondTeamQuery = new Parse.Query(GameModel);
		secondTeamQuery.equalTo('team2', team)		
		var mainQuery = Parse.Query.or(firstTeamQuery, secondTeamQuery);
		mainQuery.include('team1');
		mainQuery.include('team2');
		mainQuery.greaterThanOrEqualTo('startDate', new Date);
		mainQuery.find().then(
				(games) => {
					console.log('game');
					this.setState({games: games});
				}
			);
		},

	render: function() {
		console.log('render', this.state.games);
		var myState = this.state.games;
		var allGames = myState.map(function(game, index) {
			var prefix = '#tickets/';
			var url = prefix+game.id;
			var timeStart = `${game.get('startDate').getHours()}:${game.get('startDate').getMinutes()}`;
			var location = `${game.get('location')}`;
			console.log(game.get("location"));
			return <div key = {index}> 
						<a href = {url} className = "games"> {game.get('team1').get('teamName')} vs {game.get('team2').get('teamName')}
						<span>{` ${game.get('startDate').toDateString()} at ${timeStart}pm, ${location}`}</span></a>
					</div>
		});


		return(
			<div className = "col-sm-12">
				<div className = "gamesComponent">
					<h1 className = "gamesHeader">Select a game to view available tickets</h1>
					<h3 className = "gamesContent">Games</h3>
					<div className = "gamesList">
					{allGames}
					</div>
				</div>
			</div>
		);
	}
});
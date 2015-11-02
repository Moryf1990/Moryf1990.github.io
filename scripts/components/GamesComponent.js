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
		var firstTeamQuery = new Parse.Query(GameModel).include('teams');
		firstTeamQuery.equalTo('team1', team)
		var secondTeamQuery = new Parse.Query(GameModel).include('teams');
		secondTeamQuery.equalTo('team2', team)
		var startDateQuery = new Parse.Query(GameModel);
		startDateQuery.find().then(
			(games) => {
				this.setState({games: games})
			});
		
		
		var mainQuery = Parse.Query.or(firstTeamQuery, secondTeamQuery);
		mainQuery.include('team1');
		mainQuery.include('team2');
		//mainQuery.include('startDate');
		mainQuery.greaterThanOrEqualTo('startDate', new Date);
		mainQuery.find().then(
				(games) => {
					console.log('game');
					this.setState({games: games});
				}
			);
		},
	 
	//  giveDate: function() {
	// 	var allGames = this.state.games.map(function(game) {
	// 		var prefix = '#games/';
	// 		var url = prefix+game.id;
	//  	});
	// },

	render: function() {
		console.log('render', this.state.games);
		var myState = this.state.games;
		//var gameDate = this.state.games.map.startDate;
		var allGames = myState.map(function(game, index) {
			var prefix = '#games/';
			var url = prefix+game.id;
			var timeStart = `${game.get('startDate').getHours()}:${game.get('startDate').getMinutes()}`;
			var location = `${game.get('location')}`;
			console.log(game.get("location"));
			return <div key = {index}> 
						<a href = {url}> {game.get('team1').get('teamName')}</a>
						 <span> vs </span> 
						<a href = {url}>{game.get('team2').get('teamName')}</a>
						<span>{` ${game.get('startDate').toDateString()} at ${timeStart},  ${location}`}</span>
					</div>
		});


		return(
			<div className = "col-sm-12">
				<div className = "gamesComponent">
					<h1 className = "gamesHeader">Select a game to view available tickets</h1>
					<h3 className = "gamesContent">Games</h3>
					{allGames}
				</div>
			</div>
		);
	},
});
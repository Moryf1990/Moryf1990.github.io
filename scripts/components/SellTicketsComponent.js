var React = require('react');
var TicketModel = require('../models/TicketModel');
var TeamModel = require('../models/TeamModel');
var LeagueModel = require('../models/LeagueModel');
var GameModel = require('../models/GameModel');
var TicketModel = require('../models/TicketModel');

module.exports = React.createClass({
	getInitialState: function() {
		return { 
				 error: null,
			     teams: [],
			     games: []
		 };
	},

	onLeagueChange: function(e) {
		e.preventDefault();
		console.log(this.refs.league.value);
		var league = new LeagueModel({objectId: this.refs.league.value});
		var query = new Parse.Query(TeamModel).include('leagues');
		query.equalTo('league', league)
		query.find().then(
				(teams) => {
					// var teamsByLeague = _.groupBy(teams) {
					// 	return team.get('leagueId')
					// }
				this.setState({teams: teams})
				console.log(teams);
				}
			)
		},

	onTeamChange: function(e) {
		e.preventDefault();
		console.log(this.refs.team.value)
		var team = new TeamModel({objectId: this.refs.team.value});
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
					this.setState({games: games});
				}
			);
		},


	render: function() {
		// // e.preventDefault();
		// // var query = new Parse.Query(TeamModel).indlude('leagues');
		// // var teamName = Parse.Object.extend('teamName');
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className = "red">{this.state.error}</p>
			);
		}

		var allTeams = this.state.teams.map(function(team, index) {
			return <option value = {team.id}  key ={index}>{team.get('teamName')}</option>
		});

		var allGames = this.state.games.map(function(game, index) {
			return <option key = {index}>{game.get('team1').get('teamName')}  vs {game.get('team2').get('teamName')} on {game.get('startDate').toDateString()}</option>
		});


		return (
		<div className = "col-sm-12" onSubmit = {this.onPostTickets}>
			<div className = "sellTicketsComponent">
				<h1 className = "sellTicketsHeader">Sell Tickets Here</h1>
				{errorElement}
				<div>
					<select className = "sellTicketsSelect1" ref = "league" onChange ={this.onLeagueChange} >
						<option value = "">Choose League</option>
						<option value = "1spFvfUk7l">NFL</option>
						<option value = "ZfIRzEVu5Z">NBA</option>
						<option value = "BBi7kCNTjT">MLB</option>
						<option value = "ohLqUQbBl2">NHL</option>
						<option value = "YIjNdEB6vh">MLS</option>
					</select>
				</div>
			

				<div>
					<select className = "sellTicketsSelect2" ref = "team" onChange = {this.onTeamChange}>
						<option value = "">Choose Team</option>
						{allTeams}
					</select>
				</div>


				<div>
					<select className = "sellTicketsSelect3">
						<option value = "">Choose Game</option>
						{allGames}
					</select>
				</div>

				<div>
					<input className = "seatInput" placeholder = "seat" ref = "seat" /> 
					<input className = "priceInput" placeholder = "price" ref = "price" />
				</div>

				<div>
					<button className = "sellTicketsButton">Post Tickets For Sale</button>
				</div>
			</div>
		</div>

		);
	},
	onPostTickets: function(e) {
		e.preventDefault();
		var ticket = new TicketModel();
		ticket.set('seat', this.refs.seat.getDOMNode().value);
		ticket.set('price', this.refs.price.getDOMNode().value);
		ticket.save();
	}
});


























































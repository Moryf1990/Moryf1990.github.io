var React = require('react');
var LeaguesComponent = require('./LeaguesComponent');
var TeamRowComponent = require('./TeamRowComponent');
var GameRowComponent = require('./GameRowComponent');
var TicketRowComponent = require('./TicketRowComponent');
var TeamsComponent = require('./TeamsComponent');
var TeamModel = require('../models/TeamModel');
var LeagueModel = require('../models/LeagueModel');
var GameModel = require('../models/GameModel');
var TicketModel = require('../models/TicketModel');

// module.exports = React.createClass({
// 	getInitialState: function() {
// 		return {'tickets': []}
// 	},

// 	componentWillMount: function(e) {
// 		var game = new GameModel({objectId: this.props.gameId});
// 		var query = new Parse.Query(TicketModel).include('games');
// 		query.equalTo('game', game)
// 		// var secondTicketQuery = new Parse.Query(TicketModel).include('games');
// 		// secondTicketQuery.equalTo('price', game)
// 		query.find().then(
// 			(tickets) => {
// 				this.setState({tickets: tickets})
// 			});
// 		// var mainQuery = Parse.Query.query
// 		// mainQuery.include('seat');
// 		// mainquery.include('price');
// 		// mainQuery.find().then(
// 		// 	(tickets) => {
// 		// 		this.setState({tickets: tickets});
// 		// 	}
// 		// );
// 	},

// 	render: function() {
// 		var myState = this.state.tickets;
// 		var allTickets = myState.map(function(ticket) {
// 			var prefix = '#games/';
// 			var url = prefix+ticket.id;
// 			var gameSeat = `${ticket.get('seat')}`;
// 			var seatPrice = `${ticket.get('price')}`;
// 			return <div>
// 			<a href = {url}> key = {ticket.id} <span> {`${gameSeat}  ${seatPrice}`} </span> </a>
// 			</div> 
// 		});

// 	return(
// 			<div className = "gamesComponent">
// 				<h1 className = "gamesHeader">This is where my games will go</h1>
// 				<h3 className = "gamesHeader">Select a game to view available tickets</h3>
// 				{allTickets}
// 			</div>
// 		);
// 	},
// });
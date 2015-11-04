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

module.exports = React.createClass({
	getInitialState: function() {
		return {tickets: []}
	},

	componentWillMount: function(e) {
		var game = new GameModel({objectId: this.props.gameId});
		var firstGameQuery = new Parse.Query(TicketModel);
		firstGameQuery.equalTo('game', game)
		// var secondGameQuery = new Parse.Query(TicketModel);
		// secondGameQuery.equalTo('price', game)

		// var mainQuery = Parse.Query(firstGameQuery);
		// mainQuery.include('game');
		// mainQuery.include('price');
		firstGameQuery.find().then(
			(tickets) => {
				console.log(tickets);
				this.setState({tickets: tickets});
			}
		);
		// query.equalTo('game', game)
		// query.find().then(
		// 	(tickets) => {
		// 	this.setState({tickets: tickets})
			// }
		// )
	},

	render: function() {
		var myState = this.state.tickets;
		var allTickets = myState.map(function(ticket, index) {
			var prefix = '#games/';
			var url = prefix+ticket.id;
			var seat = `${ticket.get('seat')}`;
			var price = `${ticket.get('price')}`;
			return <div key = {index}>
						<a href = {url}> <span>{`${seat}, $${price}`} </span> </a>
					</div>
		});
		// var allTickets = this.state.tickets.map(function(ticket) {
		// 	var prefix = '#games/';
		// 	var url = prefix+ticket.id;
		// 	return <a href = {url} key = {ticket.id}><TicketRowComponent ticket={ticket}/></a>
		// });
		return(
			<div className = "col-sm-12">
				<div className = "ticketsComponent">
					<h1 className = "ticketsHeader">Click on Tickets to purchase them</h1>
					<h3 className = "ticketsContent">Available Tickets</h3>
					<div className = "ticketsList">
					{allTickets}
					</div>
				</div>
			</div>
		);
	},
});
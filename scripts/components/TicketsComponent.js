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
		var self = this;
		var firstGameQuery = new Parse.Query(TicketModel);
		firstGameQuery.equalTo('game', game)
		firstGameQuery.find().then(
			(tickets) => {
				console.log(tickets);
				this.setState({tickets: tickets});
			}
		);

		this.handler = StripeCheckout.configure({
		    key: 'pk_test_yIHyUgBhYQAMPe3cpVqJeG83',
		    image: '/img/documentation/checkout/marketplace.png',
		    locale: 'auto',
		    token: function(token) {
		    	console.log(self.chosenTicket);
		    	self.chosenTicket.destroy();
		    	self.props.router.navigate('confirmation', {trigger: true});
		    }
  		});
	},

	purchaseTicket: function(ticket) {
		console.log(ticket.get('price'));
		console.log('hello world');
		this.chosenTicket = ticket;
		this.handler.open({
	      name: 'Purchase Tickets',
	      description: 'Enter card info to complete purchase',
	      amount: (ticket.get('price'))*100
	    });
	},

	render: function() {
		var myState = this.state.tickets;
		var self = this;
		var allTickets = myState.map(function(ticket, index) {
			var seat = `${ticket.get('seat')}`;
			var price = `${ticket.get('price')}`;
			return <div key = {index}>
						<button onClick ={self.purchaseTicket.bind(self, ticket)}> <span>{`${seat}, $${price}`} </span></button>
					</div>
		});
		
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
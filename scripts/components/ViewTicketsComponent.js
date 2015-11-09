var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
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
		var currentUser = Parse.User.current();
		var self = this;
		var firstGameQuery = new Parse.Query(TicketModel);
		firstGameQuery.equalTo('userTickets', currentUser)
		firstGameQuery.find().then(
			(tickets) => {
				this.setState({tickets: tickets})
			}
		);
	},
	render: function() {
		var myState = this.state.tickets;
		var self = this;
		var allTickets = myState.map(function(ticket, index) {
			var seat = `${ticket.get('seat')}`;
			var price = `${ticket.get('price')}`;
			return <div key = {index}>
						<button> <span>{`${seat}, $${price}`} </span></button>
					</div>
		});
			return(
				<div className = "col-sm-12">
					<div className = "viewTicketsComponent">
						<h1 className = "viewTicketsHeader">Welcome</h1>
						<h3 className = "viewTicketsContent">These are the tickets you currently have for sale!!!</h3>
						<h3 className = "viewTicketsContent">Click on any of the tickets below to remove them.</h3>
						<div className = "viewTicketsList">
						<div>	
						{allTickets}
						</div>
						</div>
					</div>
				</div>
			)
	}
});
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var LeagueModel = require('../models/LeagueModel');
var LeagueRowComponent = require('./LeagueRowComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {'leagues': []}
	},
	// render: function() {
	// 	var allLeagues = this.state.leagues.map(function(league) {
	// 		return <LeagueRowComponent key = {league.id} league={league}/>
	// 	});
	// 	return (
	// 		<div className = "leagueContainer">
	// 			<div className = "row">
	// 			<h1>Choose Your League to View All Teams Within That League</h1>
	// 			<table>
	// 			<thead>
	// 				<tr>
	// 					<th>League</th>
	// 				</tr>
	// 			</thead>
	// 			<tbody>
	// 			{allLeagues}
	// 			</tbody>
	// 			</table>
	// 			</div>
	// 		</div>
	// 	);
	// },
	// componentWillMount: function() {
	// 	var self = this;
	// 	console.log('leagues');
	// 	var query = new Parse.Query(LeagueModel);
	// 	query.equalTo('category', 'Leagues');
	// 	query.find({
	// 		success: function(list) {
	// 			console.log(list); 
	// 			self.setState({leagues: list});
	// 		}
	// 	});
	// },
	// onAddLeague: function(e) {
	// 	e.preventDefault();
	// 	var league = new LeagueModel();
	// 	league.set('team', this.refs.league.value);
	// 	league.save();
	// }
	componentWillMount: function(e) {
		var leagueQuery = new Parse.Query(LeagueModel);
		leagueQuery.find().then(
			(leagues) => {
				this.setState({leagues: leagues})
			//  leagueQuery.push({
			// 	post:{
			// 		league: leagueQuery,
			// 	},
			// })
			});
	},
	render: function() {
		var allLeagues = this.state.leagues.map(function(league) {
			console.log(league);
			var prefix = '#teams/';
			var url = prefix+league.id;
			return <a className = "leagueLink" href = {url} key = {league.id}><LeagueRowComponent league={league}/></a>
		});
		return (
			// <div className = "leagueContainer">
			// 	<div className = "row">
			// 	<h1>Choose Your League to View All Teams Within That League</h1>
			// 	<table>
			// 	<thead>
			// 		<tr>
			// 			<th>League</th>
			// 		</tr>
			// 	</thead>
			// 	<tbody>
	  //           {allLeagues}
			// 	</tbody>
			// 	</table>
			// 	</div>
			// </div>
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
	},
	// onLeagueSelected: function(e) {
	// 	e.preventDefault();
	// 	this.setState({
	// 		currentType: this.objectId
	// 	});
	// 	var leagueID = this.refs.thisLeague.id;
	// 	this.props.router.navigate('#teams/'+this.refs.thisLeague.value, {trigger: true});
	// }
});


































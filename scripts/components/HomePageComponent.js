var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "col-sm-12">
				<div className = "homePageComponent">
					<h1 className = "homePageHeader">Welcome to Ticket Selling Heaven</h1>
					<h3 className = "homePageContent">Here you will find all of the tools you need to
					effectively sell all of your unwanted sporting tickets!!!</h3>
					<h3 className = "homePageContent"> Click on the <span><a href = "#register">REGISTER</a></span> link to get started,</h3>
					<h3 className = "homePageContent"> or if you are a returning user, click the <span className = "navList"><a href = "#login">LOGIN</a></span> link to post tickets</h3>
					<h3 className = "homePageContent"> or see which of your tickets have been sold.</h3>
				</div>
			</div>
		)
	}
});
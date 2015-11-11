var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "col-sm-12">
				<div className = "homePageComponent">
					<h1 className = "homePageHeader">Welcome to Ticket Selling Heaven</h1>
					<div className = "homePageLinks">
						<a className = "homePageContent" href = "#register">REGISTER</a>
						<a className = "homePageContent" href = "#login">LOGIN</a>
					</div>
				</div>
			</div>
		)
	}
});
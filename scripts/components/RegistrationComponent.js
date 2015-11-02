var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
				<div className = "col-sm-9">
					<div className = "registrationComponent">
						<h1 className = "registrationHeader">Register Here</h1>
						<input className = "registrationInput" placeholder = "First Name"></input>
						<input className = "registrationInput" placeholder = "Last Name"></input>
						<input className = "registrationInput" placeholder = "Email"></input>
						<input className = "registrationInput" placeholder = "Username"></input>
						<input className = "registrationInput" placeholder = "Password"></input>
						<button className = "registrationButton">Register</button>
					</div>
				</div>
		)
	}
});
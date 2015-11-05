var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		return(
				<div className = "col-sm-9">
					<div className = "registrationComponent">
						<form onSubmit = {this.onRegister}>
							<h1 className = "registrationHeader">Register Here</h1>
							{errorElement}
								<input className = "registrationInput" ref = "firstName" placeholder = "First Name"></input>
								<input className = "registrationInput" ref = "lastName" placeholder = "Last Name"></input>
								<input className = "registrationInput" ref = "email" placeholder = "Email"></input>
								<input className = "registrationInput" ref = "username" placeholder = "Username"></input>
								<input type="password" className = "registrationInput" ref = "password" placeholder = "Password"></input>
								<button className = "registrationButton">Register</button>
						</form>
					</div>
				</div>
		);
	},
	onRegister: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		user.signUp(
			{
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				email: this.refs.email.value,
				username: this.refs.username.value,
				password: this.refs.password.value
			},
			{
				success: (u) => {
					this.props.router.navigate('sellTickets', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	}
});






























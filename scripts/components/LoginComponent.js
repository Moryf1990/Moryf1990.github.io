var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');

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
			<div className = "col-sm-12">
				<div className = "loginComponent">
					<div className = "row">
						<div className = "col-sm-6 col-sm-offset-3"> 
							<form onSubmit = {this.onLogin}>
								<h1 className = "loginHeader">Login</h1>
								{errorElement}
								<input className = "loginInput" ref = "username" placeholder = "Username"></input>
								<input type="password" className = "loginInput" ref = "password" placeholder = "Password"></input>
								<button className = "loginButton">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	},
	
	onLogin: function(e) {
		e.preventDefault();
		Parse.User.logIn(
			this.refs.username.value,
			this.refs.password.value,
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















































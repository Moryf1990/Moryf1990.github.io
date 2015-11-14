var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
				<div className = "col-sm-3">
					<div className = "alreadyRegisteredComponent">
						<div className = "alreadyRegisteredContainer">
							<h3 className = "alreadyRegisteredHeader">Already Registered?</h3>
							<h3 className = "alreadyRegisteredContent">Click <span className = "navList"><a href = "#login">HERE</a></span> to be taken
							back to the Login page to login and post tickets for sale.</h3>
						</div>
					</div>
				</div>
		);
	}
});
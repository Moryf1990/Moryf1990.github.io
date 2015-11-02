var React=require('react');
var Backbone=require('backbone');
var RegistrationComponent=require('./RegistrationComponent');
var AlreadyRegisteredComponent=require('./AlreadyRegisteredComponent');

module.exports=React.createClass({
	render: function() {
		return (
			
			<div className="registrationContainer">

				<div className="registrationRow">
					<RegistrationComponent />
					<AlreadyRegisteredComponent />							
				</div>		
			</div>
		)
	}
})
import React from 'react';

class ContactForm extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;
		axios({
			method: 'POST',
			url: 'http://localhost:3002/send',
			data: {
				name: name,
				email: email,
				messsage: message
			}
		}).then((response) => {
			if (response.data.msg === 'success') {
				alert('Message Sent.');
				this.resetForm();
			} else if (response.data.msg === 'fail') {
				alert('Message failed to send.');
			}
		});

		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)} method="POST">
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" />
					</div>
					<div>
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" id="email" />
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea id="message" />
					</div>
				</form>
			</div>
		);
	}
}
export default ContactForm;

import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
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
	}

	resetForm() {
		document.getElementById('contact-form').reset();
	}

	render() {
		return (
			<div>
				<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
					<div>
						<label for="name">Name</label>
						<input type="text" className="form-control" id="name" />
					</div>
					<div>
						<label for="exampleInputEmail1">Email address</label>
						<input type="email" id="email" aria-describedby="emailHelp" />
					</div>
					<div>
						<label for="message">Message</label>
						<textarea rows="5" id="message" />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default ContactForm;

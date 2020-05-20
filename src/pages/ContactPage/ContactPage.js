import React from 'react';
import mainImage from '../../images/Grafiti.png';
import ContactForm from '../../components/ContactForm/contactForm';
import './ContactPage.css';

const ContactPage = (props) => {
	return (
		<div>
			<img src={mainImage} alt="contact" className="contact-image" />
			<p className="contact-text">
				Hi! My name is Amanda Lorraine and I’m a grad student at The University of Texas at Austin. I love dogs,
				I’m an introvert — I only leave the house if there’s promise of alcohol or architecture. Resume
				attached. Referrals by request only. Thanks
			</p>
			<ContactForm />
		</div>
	);
};

export default ContactPage;

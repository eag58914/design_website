import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import './SideDrawer.css';
import LinkedinLogo from '../../images/linkedin.png';
import InstagramLogo from '../../images/instagram.png';
import TwitterLogo from '../../images/twitter.png';
const sideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<div>
			<nav className={drawerClasses}>
				<a href="/">Home</a>
				<a href="/projects">Projects</a>
				<a href="/about">About Me</a>

				<ul>
					<li>
						<img src={LinkedinLogo} alt="linked-in logo" className="link-logo" />
					</li>
					<li>
						<img src={InstagramLogo} alt="instagram logo" className="instagram-logo" />
					</li>
					<li>
						<img src={TwitterLogo} alt="twitter-logo" className="twitter-logo" />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default sideDrawer;

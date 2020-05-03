import React from 'react';
import './SideDrawer.css';
import LinkedinLogo from '../../images/linkedin.png';
import InstagramLogo from '../../images/instagram.png';
import TwitterLogo from '../../images/twitter.png';
import Aimage from '../../images/ALO2.JPG';
const sideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<div>
			<nav className={drawerClasses}>
				<div class="image-cropper">
					<img src={Aimage} alt="a_image" className="a-image" />
				</div>
				<div className="nav-container">
					<a href="/" className="text-links">
						HOME
					</a>
					<a href="/projects" className="text-links">
						PROJECTS
					</a>
					<a href="/about" className="text-links">
						ABOUT ME
					</a>
				</div>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/amanda-hirsch-27476871">
							<img src={LinkedinLogo} alt="linked-in logo" className="link-logo" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/amanda-hirsch-27476871">
							<img src={InstagramLogo} alt="instagram logo" className="instagram-logo" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/amanda-hirsch-27476871">
							<img src={TwitterLogo} alt="twitter-logo" className="twitter-logo" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default sideDrawer;

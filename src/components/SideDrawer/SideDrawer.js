import React from 'react';
import './SideDrawer.css';

const sideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<div>
			<nav className={drawerClasses}>
				<ul>
					<li>Linkedin </li>
					<li>Instagram</li>
					<li>Twitter</li>
				</ul>
			</nav>
		</div>
	);
};

export default sideDrawer;

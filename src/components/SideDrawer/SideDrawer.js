import React from 'react';
import './SideDrawer.css';

const sideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<ul>
				<li>Link 3 </li>
				<li>Link 4</li>
			</ul>
		</nav>
	);
};

export default sideDrawer;

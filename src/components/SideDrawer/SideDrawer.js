import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
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
					<li>
						<a href="/projects"> Projects</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default sideDrawer;

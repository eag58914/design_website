import React from 'react';
import './Toolbar.css';
import {Link } from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = (props) => (
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div className="toolbar__toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="spacer" />
			<div className="toolbar_navigation-items">
				<div className="toolbar__logo">
					<Link to="/main">Amanda Lorraine Hirsch</Link>
				</div>
			</div>
		</nav>
	</header>
);

export default toolbar;

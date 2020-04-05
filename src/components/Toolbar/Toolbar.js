import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = (props) => (
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div>
				<DrawerToggleButton />
			</div>
			<div className="toolbar__logo">
				<a href="/"> The Logo</a>
			</div>
			<div className="spacer" />
			<div className="toolbar_navigation-items">
				<ul>
					<li>
						<a href="/">Link 1</a>
					</li>
					<li>
						<a href="/">Link 2</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default toolbar;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../src/pages/MainPage/MainPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import StickyFooter from 'react-sticky-footer';
import './App.css';

class App extends Component {
	state = {
		sideDrawerOpen: false
	};
	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { SideDrawerOpen: !prevState.SideDrawerOpen };
		});
	};
	backdropClickHandler = () => {
		this.setState({ SideDrawerOpen: false });
	};
	render() {
		let backDrop;

		if (this.state.SideDrawerOpen) {
			backDrop = <Backdrop click={this.backdropClickHandler} />;
		}
		return (
			<div style={{ height: '100%' }}>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer show={this.state.SideDrawerOpen} />
				{backDrop}
				
					<Switch>
						<Route  exact path="/main" render={() => <MainPage />} />
						<Route  exact path="/contact" render={() => <ContactPage />} />
						<Route  exact path="/projects" render={() => <ProjectsPage />} />
					</Switch>
				
				<StickyFooter
					bottomThreshold={40}
					normalStyles={{
						backgroundColor: '#999999',
						padding: '1rem'
					}}
					stickyStyles={{
						backgroundColor: 'rgba(255,255,255,.2)',
						padding: '2rem'
					}}
				>
					Add any footer markup here
				</StickyFooter>
			</div>
		);
	}
}

export default App;

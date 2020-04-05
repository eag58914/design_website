import React, { Component } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import MainPage from '../src/pages/MainPage/MainPage';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
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
				<p>This is the page content</p>
				<Router>
					<Switch>
						<Route path="/main" render={() => <MainPage />} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

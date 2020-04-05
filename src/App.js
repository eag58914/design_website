import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import MainPage from '../src/pages/MainPage/MainPage';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';

const App = () => {
	return (
		<div style={{ height: '100%' }}>
			<Toolbar />
			<SideDrawer />
			<Backdrop />
			<p>This is the page content</p>
			<Router>
				<Switch>
					<Route path="/main" render={() => <MainPage />} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;

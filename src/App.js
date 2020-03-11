import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import MainPage from '../src/pages/MainPage/MainPage';
import './App.css';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/main" render={() => <MainPage />} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;

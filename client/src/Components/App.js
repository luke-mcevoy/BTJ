import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OrganizationList from './List/OrganizationList';
import ConventionList from './List/ConventionList';
import GroupList from './List/GroupList';
import Group from './Individual/Group';

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">{/* <Navigation /> */}</header>
			</div>
			<Route exact path="/organization/" component={OrganizationList} />
			<Route exact path="/organization/:id" component={ConventionList} />
			<Route exact path="/convention/:id" component={GroupList} />
			<Route exact path="/group/:id" component={Group} />
		</BrowserRouter>
	);
};

export default App;

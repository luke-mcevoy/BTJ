import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import OrganizationList from './List/OrganizationList';
import ConventionList from './List/ConventionList';
import GroupList from './List/GroupList';
import PeopleList from './List/PeopleList';
import Organization from './Individual/Organization';
import Convention from './Individual/Convention';
import Group from './Individual/Group';

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Navigation />
				</header>
			</div>
			<Route exact path="/" component={OrganizationList} />
			<Route exact path="/organization/:id" component={ConventionList} />
			<Route exact path="/organization/:id/conventions" component={GroupList} />
			<Route
				exact
				path="/organization/:id/conventions/groups"
				component={PeopleList}
			/>
		</BrowserRouter>
	);
};

export default App;

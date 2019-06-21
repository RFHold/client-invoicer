import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Clients from "./Clients";
import Invoices from "./Invoices";
import Reports from "./Reports";
import "./style.css";

function PageContainer(props) {
	return (
		<Switch>
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/clients" component={Clients} />
			<Route exact path="/invoices" component={Invoices} />
			<Route exact path="/reports" component={Reports} />
			<Route exact path="/company/:companyId" render={(props) => {
				return <h1>Did this work? {props.match.params.companyId}</h1>
			}} />
		</Switch>
	);
}

export default PageContainer;

// 'Null' needs to be changed to whichever page component is clicked
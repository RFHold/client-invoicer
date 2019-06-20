import React, {Fragment} from 'react';
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Clients from "./Clients";
import Invoices from "./Invoices";
import Reports from "./Reports";
import { ClientForm, ProjectForm, TaskForm} from "../Forms";
import "./style.css";

function PageContainer(props) {
	return (
		<Fragment>
			<Route exact path="/dashboard" component={Dashboard} />
			<Route path="/clients" component={Clients} />
			<Route path="/clients/new" component={ClientForm} />
			<Route path="/clients/edit/:id" component={ClientForm} />
			<Route path="/projects" component={Projects} />
			<Route path="/projects/new" component={ProjectForm} />
			<Route path="/projects/edit/:id" component={ProjectForm} />
			<Route path="/tasks" component={Tasks} />
			<Route path="/tasks/new" component={TaskForm} />
			<Route path="/tasks/edit/:id" component={TaskForm} />
			<Route path="/invoices" component={Invoices} />
			<Route path="/reports" component={Reports} />
		</Fragment>
	);
}

export default PageContainer;

// 'Null' needs to be changed to whichever page component is clicked
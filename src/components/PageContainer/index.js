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
			<Route exact path="/company/:companyId" component={Dashboard} />
			<Route path="/company/:companyId/clients" component={Clients} />
			<Route path="/company/:companyId/clients/new" component={ClientForm} />
			<Route path="/company/:companyId/clients/edit/:clientId" component={ClientForm} />
			<Route path="/company/:companyId/projects" component={Projects} />
			<Route path="/company/:companyId/projects/new" component={ProjectForm} />
			<Route path="/company/:companyId/projects/edit/:projectId" component={ProjectForm} />
			<Route path="/company/:companyId/tasks" component={Tasks} />
			<Route path="/company/:companyId/tasks/new" component={TaskForm} />
			<Route path="/company/:companyId/tasks/edit/:taskId" component={TaskForm} />
			<Route path="/company/:companyId/invoices" component={Invoices} />
			<Route path="/company/:companyId/reports" component={Reports} />
		</Fragment>
	);
}

export default PageContainer;

// 'Null' needs to be changed to whichever page component is clicked
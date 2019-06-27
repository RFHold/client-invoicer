import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Projects from "../Pages/Projects";
import Tasks from "../Pages/Tasks";
import Clients from "../Pages/Clients";
import Invoices from "../Pages/Invoices";
import Reports from "../Pages/Reports";
import Register from "../../Utilities/Register";
import { ClientForm, ProjectForm, TaskForm, TimeForm, InvoiceForm } from "../Forms";
import { Col } from 'react-flexbox-grid';
import Navbar from "../Navbar";
import { RoutesContext } from "../../../Contexts";
import "../../../stylesheets/layout/_pagecontainer.scss";

function PageContainer(props) {
	const context = useContext(RoutesContext);
	return (
		<Switch>
			{/* <Route path="/register" component={Register} /> */}
			{/* <Route path="/login" component={Register} /> */}
			<Route path="*">
				<div className="col-xs-2" id="navbar-col">
					<Navbar />
				</div>
				<div className="col-xs-10" id="pagecontainer-col">
					<Route exact path="/" component={Dashboard} />
					<Route path="/clients" component={Clients} />
					<Route path="/clients/new" component={ClientForm} />
					<Route path="/client/edit/:clientId" component={ClientForm} />
					<Route path="/projects" component={Projects} />
					<Route path="/projects/new" component={ProjectForm} />
					<Route path="/project/edit/:projectId" component={ProjectForm} />
					<Route path="/tasks" component={Tasks} />
					<Route path="/tasks/new" component={TaskForm} />
					<Route path="/task/edit/:taskId" component={TaskForm} />
					<Route path="/tasks/:taskId/timeEntry" component={TimeForm} />
					<Route path="/invoices" component={Invoices} />
					<Route path="/invoices/new" component={InvoiceForm} />
					<Route path="/reports" component={Reports} />
					<Route path="/projects/:projectId/tasks" component={Tasks} projectId={context.api.project.id || 1} />

				</div>
			</Route>
		</Switch>
	);
}

export default PageContainer;

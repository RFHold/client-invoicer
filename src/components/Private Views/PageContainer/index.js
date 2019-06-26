import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Projects from "../Pages/Projects";
import Tasks from "../Pages/Tasks";
import Clients from "../Pages/Clients";
import Invoices from "../Pages/Invoices";
import Reports from "../Pages/Reports";
import Register from "../../Utilities/Register";
import { ClientForm, ProjectForm, TaskForm } from "../Forms";
import { Col } from 'react-flexbox-grid';
import Navbar from "../Navbar";
import { CompanyForm } from "../Forms";
import { RoutesContext } from "../../../Contexts";
import "./style.css";

function PageContainer(props) {
	const context = useContext(RoutesContext);
	return (
		<Switch>
			<Route path="/register" component={Register} />
			<Route path="/login" component={Register} />
			<Route path="/companies/new" component={CompanyForm} />
			<Route path="/dashboard" >
				<CompanyForm />
			</Route>
			<Route path="/company/*">
				<Route exact path="/company/:companyId/*" component={(props) => {
					if (context.getCompany() !== props.match.params.companyId) {
						context.setCompany(props.match.params.companyId)
					}
					return null
				}} />
				<Col xs={2} id="navbar-col">
					<Navbar />
				</Col>
				<Col xs={10} id="pagecontainer-col">
					<Route exact path="/company/:companyId/dashboard" component={Dashboard} />
					<Route path="/company/:companyId/clients" component={Clients} />
					<Route path="/company/:companyId/clients/new" component={ClientForm} />
					<Route path="/company/:companyId/clients/edit/:clientId" component={ClientForm} />
					<Route path="/company/:companyId/projects" component={Projects} />
					<Route path="/company/:companyId/projects/new" component={ProjectForm} />
					<Route path="/company/:companyId/projects/edit/:projectId" component={ProjectForm} />
					<Route path="/company/:companyId/tasks" component={Tasks} />
					<Route path="/company/:companyId/tasks/new" component={TaskForm} />
					<Route path="/company/:companyId/tasks/edit/:taskId" component={TaskForm} />
					<Route path="/company/:companyId/tasks/:taskId/timeEntry" component={TimeForm} />
					<Route path="/company/:companyId/invoices" component={Invoices} />
					<Route path="/company/:companyId/reports" component={Reports} />

				</Col>
			</Route>
		</Switch>
	);
}

export default PageContainer;

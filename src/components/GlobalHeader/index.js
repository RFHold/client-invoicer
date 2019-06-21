import React, { useContext } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";
import { CompanyContext } from "../Contexts"
import ListView from "../ListView"
import DropDown from "../DropDown"

function CompanyItem({ data: company }) {
	const context = useContext(CompanyContext);
	return (
		<div>
			<Link to={context.routes.companyViewRoute(company.id)} id="dashboard">{company.name}</Link>
		</div>
	);
}
function GlobalHeader() {
	const context = useContext(CompanyContext);
	return (
		<Grid fluid id="global-header-container">
			<Row id="global-header-row">
				<Col xs={2} id="brand-col">
					<Link to="/dashboard" id="brand"><i class="fas fa-circle"></i>App Name</Link>
				</Col>
				<Col xs={10} id="headernav-col">
					<Row end="xs" id="header-links">
						<div id="timers">
							<i class="fas fa-stopwatch"></i>
						</div>
						<div id="user">
							Username
						</div>
						<DropDown header="Company">
							<ListView itemComponent={CompanyItem} resource={context.routes.companiesRoute} />
						</DropDown>
					</Row>
				</Col>
			</Row>
		</Grid>
	);
}

export default GlobalHeader;
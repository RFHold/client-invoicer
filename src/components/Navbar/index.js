import React, {useContext} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import { CompanyContext } from "../Contexts"
import "./style.css";

function Navbar() {
    const context = useContext(CompanyContext);
    return (
        <Grid fluid id="navbar-container">
            {/* <Row id="dashboard-row">
                <Col xs={12}>
                    <Link to={context.routes.companyViewRoute()} id="dashboard">Dashboard</Link>
                </Col>
            </Row>
            <Row id="projects-row">
                <Col xs={12}>
                    <Link to={context.routes.projectsViewRoute()} id="projects">Projects</Link>
                </Col>
            </Row>
            <Row id="projects-row">
                <Col xs={12}>
                    <Link to={context.routes.tasksViewRoute()} id="tasks">Tasks</Link>
                </Col>
            </Row>
            <Row id="clients-row">
                <Col xs={12}>
                    <Link to={context.routes.clientsViewRoute()} id="clients">Clients</Link>
                </Col>
            </Row>
            <Row id="invoices-row">
                <Col xs={12}>
                    <Link to={context.routes.invoicesViewRoute()} id="invoices">Invoices</Link>
                </Col>
            </Row>
            <Row id="reports-row">
                <Col xs={12}>
                    <Link to={context.routes.reportsViewRoute()} id="reports">Reports</Link>
                </Col>
            </Row> */}
            <Row id="navbar-row">
                <Col xs={12} id="links-col">
                    <Link to={context.routes.companyViewRoute()} class="nav-link"><button class="navbar-button"><i class="fas fa-chart-line"></i>Dashboard</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.routes.projectsViewRoute()} class="nav-link"><button class="navbar-button"><i class="fas fa-folder"></i>Projects</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.routes.tasksViewRoute()} class="nav-link"><button class="navbar-button"><i class="fas fa-folder"></i>Tasks</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.routes.clientsViewRoute()} class="nav-link"><button class="navbar-button"><i class="fas fa-user-tie"></i>Clients</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.routes.invoicesViewRoute()} class="nav-link"><button class="navbar-button"><i class="fas fa-file-invoice-dollar"></i>Invoices</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.routes.reportsViewRoute()} class="nav-link"><button class="navbar-button"><i class="fas fa-th-list"></i>Reports</button></Link>
                </Col>
            </Row>  
        </Grid>
    );
}

export default Navbar;
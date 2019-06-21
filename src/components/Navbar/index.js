import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <Grid fluid id="navbar-container">
            {/* <Row id="dashboard-row">
                <Col xs={12}>
                    <Link to="/dashboard" class="nav-link">Dashboard</Link>
                </Col>
            </Row>
            <Row id="projects-row">
                <Col xs={12}>
                    <Link to="/projects" class="nav-link">Projects</Link>
                </Col>
            </Row>
            <Row id="projects-row">
                <Col xs={12}>
                    <Link to="/tasks" id="tasks">Tasks</Link>
                </Col>
            </Row>
            <Row id="clients-row">
                <Col xs={12}>
                    <Link to="/clients" class="nav-link">Clients</Link>
                </Col>
            </Row>
            <Row id="invoices-row">
                <Col xs={12}>
                    <Link to="/invoices" class="nav-link">Invoices</Link>
                </Col>
            </Row>
            <Row id="reports-row">
                <Col xs={12}>
                    <Link to="/reports" class="nav-link">Reports</Link>
                </Col>
            </Row> */}
            <Row id="navbar-row">
                <Col xs={12} id="links-col">
                    <Link to="/dashboard" class="nav-link"><button class="navbar-button"><i class="fas fa-chart-line"></i>Dashboard</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to="/projects" class="nav-link"><button class="navbar-button"><i class="fas fa-folder"></i>Projects</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to="/clients" class="nav-link"><button class="navbar-button"><i class="fas fa-user-tie"></i>Clients</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to="/invoices" class="nav-link"><button class="navbar-button"><i class="fas fa-file-invoice-dollar"></i>Invoices</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to="/reports" class="nav-link"><button class="navbar-button"><i class="fas fa-th-list"></i>Reports</button></Link>
                </Col>
            </Row>
        </Grid>
    );
}

export default Navbar;
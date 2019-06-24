import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <Grid fluid id="navbar-container">
            {/* <Row id="dashboard-row">
                <Col xs={12}>
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </Col>
            </Row>
            <Row id="projects-row">
                <Col xs={12}>
                    <Link to="/projects" className="nav-link">Projects</Link>
                </Col>
            </Row>
            <Row id="projects-row">
                <Col xs={12}>
                    <Link to="/tasks" id="tasks">Tasks</Link>
                </Col>
            </Row>
            <Row id="clients-row">
                <Col xs={12}>
                    <Link to="/clients" className="nav-link">Clients</Link>
                </Col>
            </Row>
            <Row id="invoices-row">
                <Col xs={12}>
                    <Link to="/invoices" className="nav-link">Invoices</Link>
                </Col>
            </Row>
            <Row id="reports-row">
                <Col xs={12}>
                    <Link to="/reports" className="nav-link">Reports</Link>
                </Col>
            </Row> */}
            <Row id="navbar-row">
                <Col xs={12} id="links-col">
                    <Link to="/dashboard" className="nav-link"><button className="navbar-button"><i className="fas fa-chart-line"></i>Dashboard</button></Link>
                    {/* </Col>
                <Col xs={12} className="links-col"> */}
                    <Link to="/projects" className="nav-link"><button className="navbar-button"><i className="fas fa-folder"></i>Projects</button></Link>
                    {/* </Col>
                <Col xs={12} className="links-col"> */}
                    <Link to="/clients" className="nav-link"><button className="navbar-button"><i className="fas fa-user-tie"></i>Clients</button></Link>
                    {/* </Col>
                <Col xs={12} className="links-col"> */}
                    <Link to="/invoices" className="nav-link"><button className="navbar-button"><i className="fas fa-file-invoice-dollar"></i>Invoices</button></Link>
                    {/* </Col>
                <Col xs={12} className="links-col"> */}
                    <Link to="/reports" className="nav-link"><button className="navbar-button"><i className="fas fa-th-list"></i>Reports</button></Link>
                </Col>
            </Row>
        </Grid>
    );
}

export default Navbar;
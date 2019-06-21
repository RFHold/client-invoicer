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
            <Row id="links-row">
                <Col xs={12}>
                    <Link to="/dashboard" class="nav-link">Dashboard</Link>
                </Col>
                <Col xs={12}>
                    <Link to="/projects" class="nav-link">Projects</Link>
                </Col>
                <Col xs={12}>
                    <Link to="/clients" class="nav-link">Clients</Link>
                </Col>
                <Col xs={12}>
                    <Link to="/invoices" class="nav-link">Invoices</Link>
                </Col>
                <Col xs={12}>
                    <Link to="/reports" class="nav-link">Reports</Link>
                </Col>
            </Row>
        </Grid>
    );
}

export default Navbar;
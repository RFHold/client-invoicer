import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <Grid fluid id="navbar-container">
            <Row id="dashboard-row">
                <Col xs={12}>
                    <Link to="/dashboard" id="dashboard">Dashboard</Link>
                </Col>
            </Row>
            <Row id="projects-row">
                <Col xs={12}>
                    <Link to="/projects" id="projects">Projects</Link>
                </Col>
            </Row>
            <Row id="projects-row">
                <Col xs={12}>
                    <Link to="/tasks" id="tasks">Tasks</Link>
                </Col>
            </Row>
            <Row id="clients-row">
                <Col xs={12}>
                    <Link to="/clients" id="clients">Clients</Link>
                </Col>
            </Row>
            <Row id="invoices-row">
                <Col xs={12}>
                    <Link to="/invoices" id="invoices">Invoices</Link>
                </Col>
            </Row>
            <Row id="reports-row">
                <Col xs={12}>
                    <Link to="/reports" id="reports">Reports</Link>
                </Col>
            </Row>
        </Grid>
    );
}

export default Navbar;
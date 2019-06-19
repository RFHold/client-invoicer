import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <Grid fluid id="navbar-container">
            <Row>
                <Col xs={12}>
                    <Link to="/" id="dashboard">Dashboard</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Link to="/" id="projects">Projects</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Link to="/" id="projects">Clients</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Link to="/" id="projects">Invoices</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Link to="/" id="projects">Reports</Link>
                </Col>
            </Row>
        </Grid>
    );
}

export default Navbar;
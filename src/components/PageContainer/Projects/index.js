import React, { useContext } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./style.css";
import ListView from '../../ListView';
import { Link } from "react-router-dom";
import { CompanyContext } from '../../Contexts';

function ListItem({ data: client }) {
    return (
        <div id="client-card">
            <h1>{client.name}</h1>
        </div>
    );
}

function Projects() {
    const context = useContext(CompanyContext);

    return (
        <Grid fluid id="content-container">
            <div id="client-container">
                <Row className="page-header">
                    <Col xs={6}>
                        <h2>Projects</h2>
                    </Col>
                    <Col xs={6}>
                        <Row end="xs">
                            {/* This needs to be updated for project route */}
                            <Link to={context.routes.newClientViewRoute()} id="clients"><button id="new-client-button"><i class="fas fa-plus"></i>Add New Project</button></Link>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row bottom="xs">
                            <ul>
                                <li><Link to="/clients">Active Projects</Link></li>
                                <li><Link to="/clients">Inactive Projects</Link></li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xs={12}>
                    <ListView itemComponent={ListItem} resource="/api/company/1/projects/new" />
                </Col>
            </Row>
        </Grid>
    );
}

export default Projects;
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";
import ListView from '../../ListView';
import PageHeader from "../../PageHeader";

function ListItem ({ data: client }) {
    return (
        <div>
            <h1>{client.name}</h1>
        </div>
    );
}

function Clients() {

    return (
        <Grid fluid id="clients-container">
            <PageHeader />
            <Row>
                <Col xs={12}>
                    <Link to="/clients/new" id="clients">new Clients</Link>
                    <ListView itemComponent={ListItem} resource="/api/company/1/clients"/>
                </Col>
            </Row>
        </Grid>
    );
}

export default Clients;
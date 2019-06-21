import React, {useContext} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
// import "./style.css";
import ListView from '../../ListView';
import {CompanyContext} from '../../Contexts';

function ListItem ({ data: client }) {
    return (
        <div>
            <h1>{client.name}</h1>
        </div>
    );
}

function Clients() {
    const context = useContext(CompanyContext)
    return (
        <Grid fluid id="clients-container">
            <Row>
                <Col xs={12}>
                    <Link to={context.routes.newClientViewRoute()} id="clients">new Clients</Link>
                    <p>Clients says hello</p>
                    <ListView itemComponent={ListItem} resource="/api/company/1/clients"/>
                </Col>
            </Row>
        </Grid>
    );
}

export default Clients;
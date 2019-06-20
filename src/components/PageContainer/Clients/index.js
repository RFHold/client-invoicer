import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
// import "./style.css";

function Clients() {
    return (
        <Grid fluid id="clients-container">
            <Row>
                <Col xs={12}>
                    <Link to="/clients/new" id="clients">new Clients</Link>
                    <p>Clients says hello</p>
                </Col>
            </Row>
        </Grid>
    );
}

export default Clients;
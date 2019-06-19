import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import "./style.css";

function Clients() {
    return (
        <Grid fluid id="clients-container">
            <Row>
                <Col xs={12}>
                    <p>Clients says hello</p>
                </Col>
            </Row>
        </Grid>
    );
}

export default Clients;
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import "./style.css";

function Invoices() {
    return (
        <Grid fluid id="invoices-container">
            <Row>
                <Col xs={12}>
                    <p>Invoices says hello</p>
                </Col>
            </Row>
        </Grid>
    );
}

export default Invoices;
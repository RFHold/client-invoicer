import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import "./style.css";

function Reports() {
    return (
        <Grid fluid id="reports-container">
            <Row>
                <Col xs={12}>
                    <p>Reports says hello</p>
                </Col>
            </Row>
        </Grid>
    );
}

export default Reports;
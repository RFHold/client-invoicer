import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import "./style.css";

function Dashboard() {
    return (
        <Grid fluid id="dashboard-container">
            <Row>
                <Col xs={12}>
                    <p>Dashboard says hello</p>
                </Col>
            </Row>
        </Grid>
    );
}

export default Dashboard;
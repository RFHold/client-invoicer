import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import "./style.css";

function Tasks() {
    return (
        <Grid fluid id="tasks-container">
            <Row>
                <Col xs={12}>
                    <p>Tasks says hello</p>
                </Col>
            </Row>
        </Grid>
    );
}

export default Tasks;
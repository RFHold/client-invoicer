import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import "./style.css";
import {TimeCard, TaskCard, ProjectCard} from "../../Cards" 

function Dashboard() {
    return (
        <Grid fluid id="dashboard-container">
            <Row>
                <Col xs={12}>
                    <h1>Dashboard</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg ={4}>
                    <TimeCard/>
                </Col>
                <Col xs={12} lg={4}>
                    <TaskCard/>
                </Col>
                <Col xs={12} lg={4}>
                    <ProjectCard/>
                </Col>
            </Row>
        </Grid>
    );
}

export default Dashboard;
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import "./style.css";
import {ProjectCard, TimeCard, TaskCard} from "../../../Private Views/Cards"

function Dashboard() {
    return (
        <Grid fluid id="dashboard-container">
            <h1>Dashboard</h1>
            <Row>
                <Col xs={12} lg={4}>
                <h3>Current Projects</h3>
                    <ProjectCard />
                </Col>  
                <Col xs={12} lg={4}>
                <h3>Open Tasks</h3>
                    <TaskCard />
                </Col>
                <Col xs={12} lg={4}>
                <h3>Time Cards</h3>
                    <TimeCard />
                </Col> 
            </Row>
        </Grid>
    );
}

export default Dashboard;
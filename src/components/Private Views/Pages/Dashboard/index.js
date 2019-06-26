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
                <p>Current Projects</p>
                    <ProjectCard />
                </Col>  
                <Col xs={12} lg={4}>
                <p>Open Tasks</p>
                    <TaskCard />
                </Col>
                <Col xs={12} lg={4}>
                <p>Time Cards</p>
                    <TimeCard />
                </Col> 
            </Row>
        </Grid>
    );
}

export default Dashboard;
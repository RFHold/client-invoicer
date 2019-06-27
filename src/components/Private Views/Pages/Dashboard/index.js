import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import "./style.css";
import {ProjectCard, TimeCard, TaskCard} from "../../../Private Views/Cards"

function Dashboard() {
    return (
        <div className="col-xs-10">
            <div className="row">
                <div className="col-xs-12">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-lg-4">
                    <TimeCard />
                </div>
                <div className="col-xs-12 col-lg-4">
                    <TaskCard />
                </div>
                <div className="col-xs-12 col-lg-4">
                    <ProjectCard />
                <Col xs={12} lg={4}>
                <h3>Open Tasks</h3>
                    <TaskCard />
                </Col>
                <Col xs={12} lg={4}>
                <h3>Time Cards</h3>
                    <TimeCard />
                </Col> 
            </div>
        </div>
        </div>
    );
}

export default Dashboard;
import React from 'react';
import { TimeCard, TaskCard, ProjectCard } from "../../Cards";

function Dashboard() {
    return (
        <div classNam="container-fluid" id="dashboard-container">
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
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
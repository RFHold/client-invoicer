import React from 'react';
import { TimeCard, TaskCard, ProjectCard } from "../../Cards";
import "../../../../stylesheets/main.scss";

function Dashboard() {
    return (
        <div className="col-xs-10" id="content-container">
            <div className="row middle-xs" id="content-header">
                <div className="col-xs-12">
                    <h2>Dashboard</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-6">
                    <TimeCard />
                </div>
                <div className="col-xs-6">
                    <TaskCard />
                </div>
                <div className="col-xs-12">
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
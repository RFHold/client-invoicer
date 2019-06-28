import React from 'react';
import { TimeCard, TaskCard, ProjectCard } from "../../Cards";
import Card from "../../../Utilities/Card";
import "../../../../stylesheets/main.scss";

function Dashboard() {
    return (
        <div className="col-xs-10" id="content-container">
            <div className="row center-xs middle-xs">
                <Card id="dashboard-clients">
                    <div className="col-xs-12">
                        <h6>Clients</h6>
                    </div>
                </Card>
                <Card id="dashboard-projects">
                    <div className="col-xs-12">
                        <h6>Projects</h6>
                    </div>
                </Card>
                <Card id="dashboard-tasks">
                    <div className="col-xs-12">
                        <h6>Tasks</h6>
                    </div>
                </Card>
                <Card id="dashboard-invoices">
                    <div className="col-xs-12">
                        <h6>Invoices</h6>
                    </div>
                </Card>
            </div>
            <div className="row">

                <div clasName="col-xs-12" id="list-container">
                    <div className="col-xs-12">
                        <h3>Open Tasks</h3>
                        <TaskCard />
                    </div>
                    <div className="col-xs-12">
                        <h3>Time Cards</h3>
                        <TimeCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
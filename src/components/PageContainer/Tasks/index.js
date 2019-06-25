import React, {useContext} from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
//import "./style.css";
import ListView from "../../ListView";
import {CompanyContext} from "../../Contexts";

function ListItem ({ data: task }) {
  const context = useContext(CompanyContext)
  return (
    <div>
      <h4>task Name: {task.name}</h4>
      <h5>Client: {task.client}</h5>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Start Date: {task.startDate}</p>
      <Link to={context.routes.deleteTaskRoute()}>Delete Task</Link> 
    </div>
  );
}

function Tasks() {
    const context = useContext(CompanyContext)
  return (
    <Grid fluid id="content-container">
    <div id="client-container">
        <Row className="page-header">
            <Col xs={6}>
                <h2>Tasks</h2>
            </Col>
            <Col xs={6}>
                <Row end="xs">
                    <Link to={context.routes.newTaskViewRoute()} id="tasks"><button id="new-client-button"><i class="fas fa-plus"></i>Add New Task</button></Link>
                </Row>
            </Col>
            <Col xs={12}>
                <Row bottom="xs">
                    <ul>
                        <li><Link to={context.routes.projectsViewRoute()}>Active Tasks</Link></li>
                        <li><Link to={context.routes.projectsViewRoute()}>Inactive Tasks</Link></li>
                    </ul>
                </Row>
            </Col>
        </Row>
    </div>
    <Row>
        <Col xs={12} id="projects-col">
        <ListView itemComponent={ListItem} resource="/api/company/1/tasks"/>
        </Col>
    </Row>
    </Grid>
  );
}

export default Tasks;
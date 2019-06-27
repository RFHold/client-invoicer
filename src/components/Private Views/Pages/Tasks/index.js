import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/layout/_clients-projects-tasks.scss";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";
import Form from "../../../Utilities/Form";
import { Grid, Row, Col } from 'react-flexbox-grid';

function ListItem({ data: task }) {
  const context = useContext(RoutesContext)
  return (
    <div id="task-card">
      <h4>task Name: {task.name}</h4>
      <h5>Client: {task.client}</h5>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Start Date: {task.startDate}</p>
      <p>Elapsed Time: {task.elapsed}</p>
      <Link to={context.view.time.new(task.id)}>Add Time</Link>
      {<Form method="DELETE" action={context.api.task(task.id)}>
        <input type="submit" value="Delete"></input>
      </Form>}
    </div>
  );
}

function Tasks() {
  const context = useContext(RoutesContext)
  return (
    <Grid fluid id="content-container">
    <div id="client-container">
      <Row className="page-header">
        <Col xs={6}>
          <h2>Tasks</h2>
        </Col>
        <Col xs={6}>
          <Row end="xs">
            <Link to={context.view.tasks.new} id="tasks">
              <button id="new-client-button">
                <i class="fas fa-plus" />
                Add New Task
              </button>
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
    <Row>
      <Col xs={12} id="tasks-col">
        <ListView
          itemComponent={ListItem}
          resource={context.api.tasks}
        />
      </Col>
    </Row>
  </Grid>
  );
}

export default Tasks;
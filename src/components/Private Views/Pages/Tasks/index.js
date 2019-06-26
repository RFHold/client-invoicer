import React, { useContext } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import Form from "../../../Utilities/Form";
//import "./style.css";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";

function ListItem({ data: task }) {
  return (
    <div>
      <h4>task Name: {task.name}</h4>
      <h5>Client: {task.client}</h5>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Start Date: {task.startDate}</p>
      {/* <Form method="DELETE" action={context.routes.deleteTaskRoute(task.id)}>
        <input type="submit" value="Delete"></input>
      </Form> */}
    </div>
  );
}

function Tasks() {
  const context = useContext(RoutesContext)
  return (
    <Grid fluid id="tasks-container">
      <Row>
        <Col xs={12}>
          <Link to={context.routes.tasksViewRoute()} id="tasks">Task List</Link>
          <p>Tasks Say Hello</p>
          <ListView itemComponent={ListItem} resource="/api/company/1/tasks" />
        </Col>
    </Row>
    </Grid>
  );
}

export default Tasks;
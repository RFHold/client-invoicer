import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/main.scss";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";
import Form from "../../../Utilities/Form";
import Card from "../../../Utilities/Card";

function ListItem({ data: task }) {
  const context = useContext(RoutesContext)
  return (
    <Card>
      <h4>task Name: {task.name}</h4>
      <h5>Client: {task.client}</h5>
      <h5>Project: {task.project}</h5> 
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Start Date: {task.startDate}</p>
      <p>Elapsed Time: {task.elapsed}</p>
      <Link to={context.view.time.new(task.id)}>Add Time</Link>
      {<Form method="DELETE" action={context.api.task(task.id)}>
        <input type="submit" value="Delete"></input>
      </Form>}
    </Card>
  );
}

function SelectItem ({ data: option }) {
  return (
      <option value={option.id}>{option.name}</option>
  );
}

function Tasks(props) {
  const context = useContext(RoutesContext)
  return (
    <Grid fluid id="content-container">
    <div id="client-container">
      <Row className="page-header">
        <Col xs={6}>
        <div>
                    <label htmlFor="taskFormProjectInput">Project</label>
                    <select name="project" id="taskFormProjectInput">
                        <option value="">Select a Project</option>
                        <ListView itemComponent={SelectItem} resource={context.api.projects}/>
                    </select>
                </div>
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
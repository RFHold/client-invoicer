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
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Start Date: {task.startDate}</p>
      {<Form method="DELETE" action={context.api.task(task.id)}>
        <input type="submit" value="Delete"></input>
      </Form>}
    </Card>
  );
}

function Tasks() {
  const context = useContext(RoutesContext)
  return (
    <div className="col-xs-10">
      <div className="row">
        <div className="col-xs-12">
          <Link to={context.view.tasks.new} id="tasks">Task List</Link>
          <p>Tasks Say Hello</p>
          <ListView itemComponent={ListItem} resource={context.api.tasks} />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
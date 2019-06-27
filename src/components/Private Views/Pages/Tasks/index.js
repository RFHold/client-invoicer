import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/main.scss";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";
import Form from "../../../Utilities/Form";
import Card from "../../../Utilities/Card";
import { tsPropertySignature } from "@babel/types";

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
  )};


function Tasks(props) {
  const context = useContext(RoutesContext)
  return (
    <div className="col-xs-10" id="content-container">
    <div className="row middle-xs" id="content-header">
      <div className="col-xs-6">
        <h2>Tasks</h2>
      </div>
      <div className="col-xs-6">
        <div className="row end-xs">
        <Link to={context.view.tasks.new} id="tasks">
            <button className="primary-button">
              <i className="fas fa-plus" />
              Add New Task
              </button>
          </Link>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12" id="list-container">
        <h1>{props.match.params.projectId}</h1>
        <ListView
          itemComponent={ListItem}
          resource={context.api.tasks}
        />
      </div>
    </div>
    </div >
  );
}

export default Tasks;


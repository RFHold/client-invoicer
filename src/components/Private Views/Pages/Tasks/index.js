import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/main.scss";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";
import Form from "../../../Utilities/Form";
import Invoice from "../../Forms/Invoice";
import Card from "../../../Utilities/Card";
import { tsPropertySignature } from "@babel/types";
import Axios from "axios";

function projectName({data: project}) {
  return (
    <h2>{project.name} Tasks</h2>
  )
}
function ListItem({ data: task}) {
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
      <Link to={context.view.time.new(task.id, task.project)}>Add Time</Link>
      {<Form method="DELETE" action={context.api.task(task.id)}>
        <input type="submit" value="Delete"></input>
      </Form>}
    </Card>
  )}

function SelectItem({ data: option }) {
  return (
    <option value={option.id}>{option.name}</option>
  );
}

function Tasks(props) {
  const context = useContext(RoutesContext)

  return (
    <div className="col-xs-10" id="content-container">
      <div className="row middle-xs" id="content-header">
        <div className="col-xs-6">
          <ListView itemComponent={projectName} resource={context.api.project.one(props.match.params.projectId)}/>
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
          <ListView
            itemComponent={ListItem}
            resource={context.api.project.tasks(props.match.params.projectId)}
          />
        </div>
      </div>
    </div>
  );
}

export default Tasks;


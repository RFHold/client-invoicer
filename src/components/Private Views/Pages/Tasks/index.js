import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/main.scss";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";
import Form from "../../../Utilities/Form";
import Invoice from "../../Forms/Invoice";
import Card from "../../../Utilities/Card";
import Timestamp from "../../../Utilities/Timestamp";
import DateComponent from "../../../Utilities/DateComponent";

function ListItem({ data: task}) {
  const context = useContext(RoutesContext)
  return (
    <Card>
      <h4>task Name: {task.name}</h4>
      <h5>Client: {task.client}</h5>
      <h5>Project: {task.project}</h5>
      <p>Description: {task.description}</p>
      <p>Due Date: <DateComponent projectdate={task.dueDate}/></p>
      <p>Start Date: <DateComponent projectdate={task.startDate}/></p>
      <p>Elapsed Time: <Timestamp timestamp={task.elapsed}/></p>
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
         <h2>Project Tasks</h2>
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
        <div className="row-xs-12" id="list-container">
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


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/main.scss";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";
import Form from "../../../Utilities/Form";
import Card from "../../../Utilities/Card";
import DropDown from "../../../Utilities/DropDown";
import DateComponent from "../../../Utilities/DateComponent";
import Timestamp from "../../../Utilities/Timestamp";

function ListItem({ data: project, data: client }) {
  const context = useContext(RoutesContext);
  return (
    <Card id="project-card">
      <div className="row center-xs">
        <div className="col-xs-11">
          <div className="row center-xs">
            <h3>{project.name}</h3>
          </div>
        </div>
        <div className="col-xs-1">
          <div className="row end-xs">
            <DropDown header={<i className="fas fa-ellipsis-v"></i>} className="dropdown">
              <div id="project-options">
                <div>
                  {<Form method="DELETE" action={context.api.project.one(project.id)}>
                    <input type="submit" value="Delete" />
                  </Form>}
                </div>
              </div>
            </DropDown>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12 text-center">
          <h6>{client.name}</h6>
          <p>{project.description}</p>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12 text-center" id="limit">
          <div>
          <h6>Start Date</h6>
          <DateComponent projectdate={project.startDate}/>
          <h6>Due Date</h6>
          <DateComponent projectdate={project.dueDate}/>
          </div>
          </div>
        <Link to={context.view.tasks.projectTasks(project.id)}>See Tasks</Link> 
      </div>
    </Card>
  );
}

function Projects() {
  const context = useContext(RoutesContext);

  return (
    <div className="col-xs-10" id="content-container">
      <div className="row middle-xs" id="content-header">
        <div className="col-xs-6">
          <h2>Projects</h2>
        </div>
        <div className="col-xs-6">
          <div className="row end-xs">
            <Link to={context.view.projects.new} id="projects">
              <button className="primary-button">
                <i className="fas fa-plus" />
                Add New Project
                </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" id="list-container">
          <ListView
            itemComponent={ListItem}
            resource={context.api.projects}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

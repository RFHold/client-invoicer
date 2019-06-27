import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/main.scss";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";
import Form from "../../../Utilities/Form";
import Card from "../../../Utilities/Card";
import DropDown from "../../../Utilities/DropDown";

function ListItem({ data: project }) {
  const context = useContext(RoutesContext);
  return (
    <Card id="project-card">
      <div className="row end-xs">
        <DropDown header={<i class="fas fa-ellipsis-v"></i>} className="dropdown">
          <div id="project-options">
            <div>
              {<Form method="DELETE" action={context.api.project(project.id)}>
                <input type="submit" value="Delete" />
              </Form>}
            </div>
          </div>
        </DropDown>
      </div>
      <div className="row">
        <div className="col" id="card-options">

        </div>
      </div>
      <h4>Project Name: {project.name}</h4>
      <h5>Client: {project.client}</h5>
      <p>Description: {project.description}</p>
      <p>Due Date: {project.dueDate}</p>
      <p>Start Date: {project.startDate}</p>
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
    </div >
  );
}

export default Projects;

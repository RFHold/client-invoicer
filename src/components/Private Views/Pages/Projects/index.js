import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/layout/_clients-projects-tasks.scss";
import ListView from "../../../Utilities/ListView";
import { RoutesContext } from "../../../../Contexts";
import Form from "../../../Utilities/Form";

function ListItem({ data: project }) {
  const context = useContext(RoutesContext);
  return (
    <div id="project-card">
      <h4>Project Name: {project.name}</h4>
      <h5>Client: {project.client}</h5>
      <p>Description: {project.description}</p>
      <p>Due Date: {project.dueDate}</p>
      <p>Start Date: {project.startDate}</p>
      {<Form method="DELETE" action={context.api.project(project.id)}>
        <input type="submit" value="Delete" />
      </Form>}
    </div>
  );
}

function Projects() {
  const context = useContext(RoutesContext);

  return (
    <div className="container-fluid" id="content-container">
      <div id="client-container">
        <div className="row page-header">
          <div className="col-xs-6">
            <h2>Projects</h2>
          </div>
          <div className="col-xs-6">
            <div className="row end-xs">
              <Link to={context.view.projects.new} id="projects">
                <button id="new-client-button">
                  <i className="fas fa-plus" />
                  Add New Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row-xs-12" id="projects-col">
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

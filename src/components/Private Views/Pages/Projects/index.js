import React, { useContext } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import "./style.css";
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
    <Grid fluid id="content-container">
      <div id="client-container">
        <Row className="page-header">
          <Col xs={6}>
            <h2>Projects</h2>
          </Col>
          <Col xs={6}>
            <Row end="xs">
              <Link to={context.view.projects.new} id="projects">
                <button id="new-client-button">
                  <i className="fas fa-plus" />
                  Add New Project
                </button>
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs={12} id="projects-col">
          <ListView
            itemComponent={ListItem}
            resource={context.api.projects}
          />
        </Col>
      </Row>
    </Grid>
  );
}

export default Projects;

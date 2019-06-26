import React, { useContext } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import "./style.css";
import ListView from "../../ListView";
import { CompanyContext } from "../../../Contexts";

function ListItem({ data: project }) {
  const context = useContext(CompanyContext);
  return (
    <div id="project-card">
      <h4>Project Name: {project.name}</h4>
      <h5>Client: {project.client}</h5>
      <p>Description: {project.description}</p>
      <p>Due Date: {project.dueDate}</p>
      <p>Start Date: {project.startDate}</p>
      {/* <Form method="DELETE" action={context.routes.deleteProjectRoute(project.id)}>
        <input type="submit" value="Delete" />
      </Form> */}
    </div>
  );
}

function Projects() {
  const context = useContext(CompanyContext);

  return (
    <Grid fluid id="content-container">
      <div id="client-container">
        <Row className="page-header">
          <Col xs={6}>
            <h2>Projects</h2>
          </Col>
          <Col xs={6}>
            <Row end="xs">
              <Link to={context.routes.newProjectViewRoute()} id="projects">
                <button id="new-client-button">
                  <i class="fas fa-plus" />
                  Add New Project
                </button>
              </Link>
            </Row>
          </Col>
          <Col xs={12}>
            <Row bottom="xs">
              <ul>
                <li>
                  <Link to={context.routes.projectsViewRoute()}>
                    Active Projects
                  </Link>
                </li>
                <li>
                  <Link to={context.routes.projectsViewRoute()}>
                    Inactive Projects
                  </Link>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs={12} id="projects-col">
          <ListView
            itemComponent={ListItem}
            resource="/api/company/1/projects/"
          />
        </Col>
      </Row>
    </Grid>
  );
}

export default Projects;

import React, {useContext} from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
//import "./style.css";
import ListView from "../../ListView";
import {CompanyContext} from "../../Contexts";

function ListItem ({ data: project }) {
  return (
    <div>
      <h4>Project Name: {project.name}</h4>
      <h5>Client: {project.client}</h5>
      <p>Description: {project.description}</p>
      <p>Due Date: {project.dueDate}</p>
      <p>Start Date: {project.startDate}</p>
    </div>
  );
}

function Projects() {
    const context = useContext(CompanyContext)
  return (
    <Grid fluid id="projects-container">
      <Row>
        <Col xs={12}>
          <Link to={context.routes.projectsViewRoute()} id="projects">Project List</Link>
          <p>Projects says hello</p>
          <ListView itemComponent={ListItem} resource="/api/company/1/projects"/>
        </Col>
      </Row>
    </Grid>
  );
}

export default Projects;

import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import axios from "axios";
// import "./style.css";

function Tasks() {
   axios.get(tasksRoute).then((err, response) => {
    if (err) return err;
    else {
      const tasks = response.results;
      return tasks;
    }
  }).then(tasks => {
      return (
          <Grid fluid id="tasks-container">
              <Row>
                  <Col xs={12}>
                      {tasks.map(task => (
                          <div>
                              <h4>Task Name: {task.name}</h4>
                              <p>Description: {task.description}</p>
                              <p>Due Date: {task.dueDate}</p>
                              <p>Start Date: {task.startDate}</p>
                          </div>
                      ))}
                  </Col>
              </Row>
          </Grid>
      )
  });
}

export default Tasks;

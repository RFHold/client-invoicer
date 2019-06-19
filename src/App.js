import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Grid, Row, Col } from 'react-flexbox-grid';
import GlobalHeader from "./components/GlobalHeader";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalHeader />
          <Grid fluid id="app-container">
            <Row id="app-row">
              <Col xs={3} id="navbar-col">
                <Navbar />
              </Col>
              <Col xs={9} id="pagecontainer-col">
                <PageContainer />
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
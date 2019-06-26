import React, { PureComponent as Component } from 'react';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "./App.css";
import { Grid, Row } from 'react-flexbox-grid';
import GlobalHeader from "./components/Private Views/GlobalHeader";
import PageContainer from "./components/Private Views/PageContainer";
import Authenticator from "./Contexts/Authenticator";
import { CompanyContext } from "./Contexts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 1,
      session: undefined
    };
  }
  
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Router>
        <div>
          <Redirect from="/" to="/login" />

          <CompanyContext.Provider value={}>
            <GlobalHeader />
            <Grid fluid id="container">
              <Row>
                <Authenticator />
                <PageContainer />
              </Row>
            </Grid>
          </CompanyContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
import React, { PureComponent as Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Grid, Row, Col } from 'react-flexbox-grid';
import GlobalHeader from "./components/GlobalHeader";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import Dashboard from "./components/PageContainer/Dashboard";
import Projects from "./components/PageContainer/Dashboard";
import Clients from "./components/PageContainer/Dashboard";
import Invoices from "./components/PageContainer/Dashboard";
import Reports from "./components/PageContainer/Dashboard";
import { CompanyContext } from "./components/Contexts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: undefined
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
          <CompanyContext.Provider value={
            {
              setCompany: (id) => this.setState({ company: id }),
              getCompany: () => this.state.company,
              routes: {
                clientsRoute: `/api/company/${this.state.company}/clients`
              }
            }
          }>
            <GlobalHeader />
            <Grid fluid id="app-container">
              <Row id="app-row">
                <Col xs={2} id="navbar-col">
                  <Navbar>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/clients" component={Clients} />
                    <Route exact path="/invoices" component={Invoices} />
                    <Route exact path="/reports" component={Reports} />
                  </Navbar>
                </Col>
                <Col xs={10} id="pagecontainer-col">
                  <PageContainer />
                </Col>
              </Row>
            </Grid>
          </CompanyContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
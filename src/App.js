import React, { PureComponent as Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Grid, Row } from 'react-flexbox-grid';
import GlobalHeader from "./components/GlobalHeader";
import PageContainer from "./components/PageContainer";
import Authenticator from "./components/Authenticator";
import { CompanyContext } from "./components/Contexts";
import Navbar from "./components/PageContainer/Navbar";

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
                clientsRoute: `/api/company/${this.state.company}/clients`,
                projectsRoute: `/api/company/${this.state.company}/projects`,
                tasksRoute: `/api/company/${this.state.company}/tasks`,
                clientRoute: (id) => `/api/company/${this.state.company}/client/${id}`,
                projectRoute: (id) => `/api/company/${this.state.company}/project/${id}`,
                taskRoute: (id) => `/api/company/${this.state.company}/task/${id}`,
                companiesRoute: `/api/companies`,
                companyRoute: `/api/company/${this.state.company}`,
                usersRoute: `/api/users`,
                companyViewRoute: (id) => `/company/${id || this.state.company}/dashboard`,
                clientsViewRoute: (id) => `/company/${id || this.state.company}/clients`,
                newClientViewRoute: (id) => `/company/${id || this.state.company}/clients/new`,
                projectsViewRoute: (id) => `/company/${id || this.state.company}/projects`,
                tasksViewRoute: (id) => `/company/${id || this.state.company}/tasks`,
                invoicesViewRoute: (id) => `/company/${id || this.state.company}/invoices`,
                reportsViewRoute: (id) => `/company/${id || this.state.company}/reports`,
              }
            }
          }>
            <GlobalHeader />
            <Grid fluid id="app-container">
              <Row id="app-row">
                <Authenticator/>
                <PageContainer/>
              </Row>
            </Grid>
          </CompanyContext.Provider>
        </div>
      </Router>
    );
  }
}

withRouter(App)

export default App;
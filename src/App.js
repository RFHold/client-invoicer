import React, { PureComponent as Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Grid, Row } from 'react-flexbox-grid';
import GlobalHeader from "./components/GlobalHeader";
import PageContainer from "./components/PageContainer";
import Authenticator from "./components/Authenticator";
import { CompanyContext, SessionContext } from "./components/Contexts";

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
          <CompanyContext.Provider value={{
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
              newProjectViewRoute: (id) => `/company/${id || this.state.company}/projects/new`,
              tasksViewRoute: (id) => `/company/${id || this.state.company}/tasks`,
              newTaskViewRoute: (id) => `/company/${id || this.state.company}/tasks/new`,
              invoicesViewRoute: (id) => `/company/${id || this.state.company}/invoices`,
              reportsViewRoute: (id) => `/company/${id || this.state.company}/reports`,
              deleteTaskRoute: (taskid, companyid) => `/company/${companyid || this.state.company}/task/${taskid}`,
              newTimeEntryRoute: (task) => `/api/company/${this.state.company}/task/${task}/timeEntries`,
              newTimeEntryViewRoute: (task) => `/company/${this.state.company}/tasks/${task}/timeEntry`
            }
          }}>
            <SessionContext.Provider value={{
              setSession: (state) => this.setState({ session: state }),
              getSession: () => this.state.session
            }}>
              <GlobalHeader />
              <Grid fluid id="app-container">
                <Row id="app-row">
                  <Authenticator/>
                  <PageContainer/>
                </Row>
                </Grid>
            </SessionContext.Provider>
          </CompanyContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
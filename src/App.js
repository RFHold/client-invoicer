import React, { PureComponent as Component } from 'react';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "./App.css";
import { Grid, Row } from 'react-flexbox-grid';
import GlobalHeader from "./components/Private Views/GlobalHeader";
import PageContainer from "./components/Private Views/PageContainer";
import { RoutesContext, SessionContext } from "./Contexts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: undefined
    };
  }
  
  componentDidMount() {
    checkSession().then(response => {
      this.setState({session: true})
    }).catch(error => {
      this.setState({ session: false })
      if (this.props.history.location.pathname !== "/register") {
        this.props.history.push("/login")
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Redirect exact from="/" to="/login" />
          <RoutesContext.Provider>
            <SessionContext.Provider value={this.state.session}>
              <GlobalHeader />
              <Grid fluid id="container">
                <Row>
                  <PageContainer />
                </Row>
              </Grid>
            </SessionContext.Provider>
          </RoutesContext.Provider>
        </div>
      </Router>
    );
  }
  
  checkSession() {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "/api/session"
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default App;
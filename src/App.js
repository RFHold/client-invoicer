import React, { PureComponent as Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import "./stylesheets/main.scss";

import PageContainer from "./components/Private Views/PageContainer";
import { RoutesContext, SessionContext } from "./Contexts";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: undefined
    };
  }

  componentDidMount() {
    this.checkSession().then(response => {
      this.setState({session: response.data.result.username})
    }).catch(error => {
      this.setState({ session: false })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {(this.state.session === false) ? <Redirect exact from="/register" to="/register" /> : ""}
            {(this.state.session === false) ? <Redirect exact from="/" to="/login" /> : ""}
            {(this.state.session === false) ? <Redirect exact from="*" to="/login" /> : ""}
          </Switch>
          <SessionContext.Provider value={this.state.session}>
            <PageContainer />
          </SessionContext.Provider>
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
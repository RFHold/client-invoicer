import React, { PureComponent as Component } from "react";
import { CompanyContext } from "../Contexts"
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function checkSession() {
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

class Authenticator extends Component {
    componentDidMount() {
        checkSession().then(response => {

        }).catch(error => {
            if (this.props.history.location.pathname !== "/register") {
                this.props.history.push("/login")
            }
        })
    }
    render() {
        return (
            <React.Fragment></React.Fragment>
        );
    }
}

Authenticator.contextType = CompanyContext;

export default withRouter(Authenticator)
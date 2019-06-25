import React from 'react';
import { Col } from 'react-flexbox-grid';
import { UserForm, LoginForm } from '../../Forms';
import { Route, Link, Switch } from "react-router-dom";
// import "./style.css";

function Register() {
    return (

        <Switch>
            <Route exact path="/register">
                <Col xs={12}>
                    <UserForm />
                    <div className="login-register"><p>Already Registered?&nbsp;</p><Link to="/login">Login</Link></div>
                </Col>
            </Route >

            <Route exact path="/login">
                <Col xs={12}>
                    <LoginForm />
                    <div className="login-register"><Link to="/register">Register</Link></div>
                </Col>
            </Route>
        </Switch >

    );
}

export default Register;
import React from 'react';
import { UserForm, LoginForm } from "../../Public Views/Forms";
import { Route, Link, Switch } from "react-router-dom";

function Register() {
    return (

        <Switch>
            <Route exact path="/register">
                <div className="col-xs-12">
                    <UserForm />
                    <div className="login-register"><p>Already Registered?&nbsp;</p><Link to="/login">Login</Link></div>
                </div>
            </Route >

            <Route exact path="/login">
                <div className="col-xs-12">
                    <LoginForm />
                    <div className="login-register"><Link to="/register">Register</Link></div>
                </div>
            </Route>
        </Switch >

    );
}

export default Register;
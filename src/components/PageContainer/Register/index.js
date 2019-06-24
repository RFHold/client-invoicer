import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { UserForm, LoginForm } from '../../Forms';
import { Route, Link, Switch } from "react-router-dom";
// import "./style.css";

function Register() {
    return (
        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <p>Register says hello</p>
                    <Switch>
                        <Route exact path="/register">
                            <Link to="/login">Login</Link>
                            <UserForm />
                        </Route>
                        <Route exact path="/login">
                            <Link to="/register">Register</Link>
                            <LoginForm />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Grid>
    );
}

export default Register;
import React, { PureComponent as Component } from "react";
import Form from "../../../Utilities/Form";
import Card from "../../../Utilities/Card";
import { withRouter } from 'react-router-dom';
import "./style.css";

class LoginFormWithoutRouter extends Component {
    render() {
        return (
            <div className="login-form">
                <Card>
                    <Form method="POST" action="/api/session" onSuccess={() => { this.props.history.push("/dashboard") }}>
                        <h1>Login</h1>
                        <div>
                            <label htmlFor="sessionFormLoginInput">Username or Email</label>
                            <input id="sessionFormLoginInput" name="login" type="text" />
                        </div>
                        <div>
                            <label htmlFor="sessionFormPasswordInput">Password</label>
                            <input id="sessionFormPasswordInput" name="password" type="password" />
                        </div>
                        <div className="button-container">
                            <button className="submit-button" type="submit">Login</button>
                        </div>
                    </Form>
                </Card>
            </div>
        );
    }
}
const LoginForm = withRouter(LoginFormWithoutRouter)

export { LoginForm };
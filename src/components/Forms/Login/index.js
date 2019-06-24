import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { withRouter } from 'react-router-dom';

class LoginFormWithoutRouter extends Component {
    render() {
        return (
            <Form method="POST" action="/api/session" onSuccess={() => {this.props.history.push("/dashboard")}}>
                <h1>Login</h1>
                <div>
                    <label htmlFor="sessionFormLoginInput">Username or Email</label>
                    <input id="sessionFormLoginInput" name="login" type="text" />
                </div>
                <div>
                    <label htmlFor="sessionFormPasswordInput">Password</label>
                    <input id="sessionFormPasswordInput" name="password" type="password" />
                </div>
                <button type="submit">Login</button>
            </Form>
        );
    }
}
const LoginForm = withRouter(LoginFormWithoutRouter)

export { LoginForm };
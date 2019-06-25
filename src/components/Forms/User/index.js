import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import Card from "../../Card";
import { CompanyContext } from "../../Contexts"
import { withRouter } from 'react-router-dom';
import "./style.css";

class UserFormWithoutRouter extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.verb = (props.type === "edit") ? "Submit" : "Register"

        this.state = state
    }
    componentDidMount() {
        this.setState({ action: (this.props.action) ? this.props.action : this.context.routes.usersRoute })
    }

    render() {
        return (
            <div className="register-form">
                <Card>
                    <Form method={this.state.method} action={this.state.action}>
                        <h1>Register</h1>
                        <div>
                            <label htmlFor="userFormUsernameInput">Username</label>
                            <input id="userFormUsernameInput" name="username" type="text" />
                        </div>
                        <div>
                            <label htmlFor="userFormPasswordInput">Password</label>
                            <input id="userFormPasswordInput" name="password" type="password" />
                        </div>
                        <div>
                            <label htmlFor="userFormEmailInput">Email</label>
                            <input id="userFormEmailInput" name="email" type="email" />
                        </div>
                        <div class="form-group">
                            <div>
                                <label htmlFor="userFormFirstNameInput">First Name</label>
                                <input id="userFormFirstNameInput" name="firstName" type="text" />
                            </div>
                            <div>
                                <label htmlFor="userFormLastNameInput">Last Name</label>
                                <input id="userFormLastNameInput" name="lastName" type="text" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div>
                                <label htmlFor="userFormAddressInput">Address</label>
                                <input id="userFormAddressInput" name="address" type="text" />
                            </div>
                            <div>
                                <label htmlFor="userFormPhoneInput">Phone</label>
                                <input id="userFormPhoneInput" name="phone" type="text" />
                            </div>
                        </div>
                        <div class="button-container">
                            <button class="submit-button" type="submit">{this.state.verb}</button>
                        </div>
                    </Form>
                </Card>
            </div>
        );
    }
}

UserFormWithoutRouter.contextType = CompanyContext;
const UserForm = withRouter(UserFormWithoutRouter)

export { UserForm }
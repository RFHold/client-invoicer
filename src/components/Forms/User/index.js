import React, { PureComponent as Component } from "react";
import Form from '../../Form';

class User extends Component {
    render() {
        return (
            <Form method="POST" action="/api/users">
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
                    <label htmlFor="userFormFirstNameInput">First Name</label> 
                    <input id="userFormFirstNameInput" name="firstName" type="text" />
                </div>
                <div>
                    <label htmlFor="userFormLastNameInput">Last Name</label> 
                    <input id="userFormLastNameInput" name="lastName" type="text" />
                </div>
                <div>
                    <label htmlFor="userFormEmailInput">Email</label> 
                    <input id="userFormEmailInput" name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="userFormAddressInput">Address</label> 
                    <input id="userFormAddressInput" name="address" type="text" />
                </div>
                <div>
                    <label htmlFor="userFormPhoneInput">Phone</label> 
                    <input id="userFormPhoneInput" name="phone" type="text" />
                </div>
                <button type="submit">Register</button>
            </Form>
        );
    }
}

export default User;
import React, { PureComponent as Component } from "react";
import Form from '../../Form';

class Company extends Component {
    render() {
        return (
            <Form method="POST" action="/api/companies">
                <h1>Create Company</h1>
                <div>
                    <label htmlFor="companyFormNameInput">Name</label>
                    <input id="companyFormNameInput" name="name" type="text" />
                </div>
                <button type="submit">Create Company</button>
            </Form>
        );
    }
}

export default Company;
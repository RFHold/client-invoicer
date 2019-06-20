import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { CompanyContext } from "../../Contexts"

class ClientForm extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.action = (props.action) ? props.action : this.context.routes.clientsRoute
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }
    render() {
        return (
            <Form method={this.state.method} action={this.state.action}>
                <h1>Create Client</h1>
                <div>
                    <label htmlFor="clientFormNameInput">Name</label>
                    <input id="clientFormNameInput" name="name" type="text" />
                </div>
                <button type="submit">{this.state.verb} Client</button>
            </Form>
        );
    }
}

ClientForm.contextType = CompanyContext;

export { ClientForm }
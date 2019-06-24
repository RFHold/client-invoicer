import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { CompanyContext } from "../../Contexts"
import { withRouter } from 'react-router-dom';

class ClientForm extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }
    componentDidMount() {
        this.setState({ action: (this.props.action) ? this.props.action : this.context.routes.clientsRoute})
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

withRouter(ClientForm)
ClientForm.contextType = CompanyContext;

export { ClientForm }
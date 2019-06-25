import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import Modal from '../../Modal';
import { CompanyContext } from "../../Contexts"
import { withRouter } from 'react-router-dom';

class ClientFormWithoutRouter extends Component {
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
            <Modal header={`${this.state.verb} Client`} onClose={this.context.routes.clientsViewRoute()}>
                <Form method={this.state.method} action={this.state.action} onSuccess={() => { this.context.routes.clientsViewRoute() }}>
                    <div>
                        <label htmlFor="clientFormNameInput">Name</label>
                        <input id="clientFormNameInput" name="name" type="text" />
                    </div>
                    <button type="submit">{this.state.verb} Client</button>
                </Form>
            </Modal>
        );
    }
}

ClientFormWithoutRouter.contextType = CompanyContext;
const ClientForm = withRouter(ClientFormWithoutRouter)

export { ClientForm }
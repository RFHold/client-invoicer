import React, { PureComponent as Component } from "react";
import Form from '../../../Utilities/Form';
import Modal from '../../../Utilities/Modal';
import { RoutesContext } from "../../../../Contexts"
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
        this.setState({ action: (this.props.action) ? this.props.action : this.context.api.clients })
    }
    render() {
        return (
            <Modal header={`${this.state.verb} Client`} onClose={this.context.view.clients.all}>
                <Form method={this.state.method} action={this.state.action} onSuccess={() => { this.props.history.push(this.context.view.clients.all) }}>
                    <div>
                        <label htmlFor="clientFormNameInput">Name</label>
                        <input id="clientFormNameInput" name="name" type="text" />
                    </div>
                    <div className="button-container">
                        <button className="secondary-button" type="submit">{this.state.verb} Client</button>
                    </div>
                </Form>
            </Modal>
        );
    }
}

ClientFormWithoutRouter.contextType = RoutesContext;
const ClientForm = withRouter(ClientFormWithoutRouter)

export { ClientForm }
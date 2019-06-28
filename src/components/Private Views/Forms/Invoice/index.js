import React, { PureComponent as Component } from "react";
import Form from '../../../Utilities/Form';
import Modal from '../../../Utilities/Modal';
import ListView from '../../../Utilities/ListView';
import { RoutesContext } from "../../../../Contexts"
import { withRouter } from 'react-router-dom';

function SelectItem({ data: option }) {
    return (
        <option value={option.id}>{option.name}</option>
    );
}

class InvoiceFormWithoutRouter extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }
    componentDidMount() {
        this.setState({ action: (this.props.action) ? this.props.action : this.context.api.invoices })
    }
    render() {
        return (
            <Modal header={`${this.state.verb} Invoice`} onClose={this.context.view.invoices.all}>
                <Form method={this.state.method} action={this.state.action} onSuccess={() => { this.props.history.push(this.context.view.invoices.all) }}>
                    <div>
                        <label htmlFor="invoiceFormProjectInput">Client</label>
                        <select name="client" id="invoiceFormProjectInput">
                            <option value="">Select a Client</option>
                            <ListView itemComponent={SelectItem} resource={this.context.api.clients} />
                        </select>
                    </div>
                    <div>
                        <label htmlFor="invoiceFormStartDateInput">Start Date</label>
                        <input id="invoiceFormStartDateInput" name="startDate" type="datetime-local" />
                    </div>
                    <div>
                        <label htmlFor="invoiceFormEndDateInput">End Date</label>
                        <input id="invoiceFormStartDateInput" name="endDate" type="datetime-local" />
                    </div>
                    <div>
                        <label htmlFor="invoiceFormDueDateInput">Due Date</label>
                        <input id="invoiceFormStartDateInput" name="dueDate" type="datetime-local" />
                    </div>
                    <button type="submit">{this.state.verb} Client</button>
                </Form>
            </Modal>
        );
    }
}

InvoiceFormWithoutRouter.contextType = RoutesContext;

export const InvoiceForm = withRouter(InvoiceFormWithoutRouter)
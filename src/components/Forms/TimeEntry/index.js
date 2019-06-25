import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { CompanyContext } from "../../Contexts"
import { withRouter } from 'react-router-dom';
import ListView from '../../ListView';
import Modal from '../../Modal';

function SelectItem ({ data: option }) {
    return (
        <option value={option.id}>{option.name}</option>
    );
}

class TimeFormWithoutRouter extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }
    componentDidMount() {
        this.setState({ action: (this.props.action) ? this.props.action : this.context.routes.newTimeEntryRoute })
    }
    render() {
        return (
            <Modal header={`${this.state.verb} Time`} onClose={this.context.routes.tasksViewRoute()}>
            <Form method={this.state.method} action={this.state.action} onSuccess={() => {this.props.history.push(this.context.routes.tasksViewRoute())}}>
                <div>
                    <label htmlFor="TimeFormProjectInput">Task</label>
                    <select name="task" id="timeFormProjectInput">
                        <option value="">Select a Task</option>
                        <ListView itemComponent={SelectItem} resource={this.context.routes.tasksRoute}/>
                    </select>
                </div>
                <div>
                    <label htmlFor="timeFormDescriptionInput">Description</label>
                    <input id="timeFormDescriptionInput" name="description" type="text" />
                </div>
                <div>
                    <label htmlFor="timeFormStartDateInput">Start Date</label>
                    <input id="timeFormStartDateInput" name="startDate" type="datetime-local" />
                </div>
                <div>
                    <label htmlFor="timeFormDueDateInput">End Date</label>
                    <input id="timeFormDueDateInput" name="dueDate" type="datetime-local" />
                </div>
                <button type="submit">{this.state.verb} Time</button>
            </Form>
            </Modal>
        );
    }
}

TimeFormWithoutRouter.contextType = CompanyContext;
const TimeForm = withRouter(TimeFormWithoutRouter)

export { TimeForm }
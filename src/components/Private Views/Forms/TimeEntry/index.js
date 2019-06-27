import React, { PureComponent as Component } from "react";
import Form from '../../../Utilities/Form';
import { RoutesContext } from "../../../../Contexts"
import { withRouter } from 'react-router-dom';
import ListView from '../../../Utilities/ListView';
import Modal from '../../../Utilities/Modal';

function SelectItem({ data: option }) {
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
        this.setState({ action: (this.props.action) ? this.props.action : this.context.api.timeEntries(this.props.match.params.taskId) })
    }
    render() {
        return (
            <Modal header={`${this.state.verb} Time`} onClose={this.context.view.task.all}>
                <Form method={this.state.method} action={this.state.action} onSuccess={() => { this.props.history.push(this.context.view.task.all) }}>
                    <div>
                        <label htmlFor="TimeFormProjectInput">Task</label>
                        <select name="task" id="timeFormProjectInput">
                            <option value="">Select a Task</option>
                            <ListView itemComponent={SelectItem} resource={this.context.api.tasks} />
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
                        <input id="timeFormDueDateInput" name="endDate" type="datetime-local" />
                    </div>
                    <button className="secondary-button" type="submit">{this.state.verb} Time</button>
                </Form>
            </Modal>
        );
    }
}

TimeFormWithoutRouter.contextType = RoutesContext;
const TimeForm = withRouter(TimeFormWithoutRouter)

export { TimeForm }
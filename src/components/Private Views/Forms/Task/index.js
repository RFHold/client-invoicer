import React, { PureComponent as Component } from "react";
import Form from '../../../Utilities/Form';
import { RoutesContext } from "../../../../Contexts"
import { withRouter } from 'react-router-dom';
import ListView from '../../../Utilities/ListView';
import Modal from '../../../Utilities/Modal';

function SelectItem ({ data: option }) {
    return (
        <option value={option.id}>{option.name}</option>
    );
}

class TaskFormWithoutRouter extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }
    componentDidMount() {
        this.setState({ action: (this.props.action) ? this.props.action : this.context.api.tasks })
    }
    render() {
        return (
            <Modal header={`${this.state.verb} Client`} onClose={this.context.view.tasks.all}>
                <Form method={this.state.method} action={this.state.action} onSuccess={() => { this.props.history.push(this.context.view.tasks.all)}}>
                <h1>Create Task</h1>
                <div>
                    <label htmlFor="taskFormNameInput">Name</label>
                    <input id="taskFormNameInput" name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="taskFormProjectInput">Project</label>
                    <select name="project" id="taskFormProjectInput">
                        <option value="">Select a Project</option>
                        <ListView itemComponent={SelectItem} resource={this.context.api.projects}/>
                    </select>
                </div>
                <div>
                    <label htmlFor="taskFormClientInput">Client</label>
                    <select name="client" id="taskFormClientInput">
                        <option value="">Select a Client</option>
                        <ListView itemComponent={SelectItem} resource={this.context.api.clients}/>
                    </select>
                </div>
                <div>
                    <label htmlFor="taskFormDescriptionInput">Description</label>
                    <input id="taskFormDescriptionInput" name="description" type="text" />
                </div>
                <div>
                    <label htmlFor="taskFormStartDateInput">Start Date</label>
                    <input id="taskFormStartDateInput" name="startDate" type="datetime-local" />
                </div>
                <div>
                    <label htmlFor="taskFormDueDateInput">Due Date</label>
                    <input id="taskFormDueDateInput" name="dueDate" type="datetime-local" />
                </div>
                <button type="submit">{this.state.verb} Task</button>
            </Form>
            </Modal>
        );
    }
}

TaskFormWithoutRouter.contextType = RoutesContext;
const TaskForm = withRouter(TaskFormWithoutRouter)

export { TaskForm }
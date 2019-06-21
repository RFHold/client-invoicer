import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { CompanyContext } from "../../Contexts"
import { withRouter } from 'react-router-dom';

class TaskForm extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }
    componentDidMount() {
        this.setState({ action: (props.action) ? props.action : this.context.routes.tasksRoute })
    }
    render() {
        return (
            <Form method={this.state.method} action={this.state.action}>
                <h1>Create Task</h1>
                <div>
                    <label htmlFor="taskFormNameInput">Name</label>
                    <input id="taskFormNameInput" name="name" type="text" />
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
        );
    }
}

TaskForm.contextType = withRouter(CompanyContext);

export { TaskForm }
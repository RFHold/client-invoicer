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
            <Modal header={`${this.state.verb} Task`} onClose={this.context.view.tasks.projectTasks(this.props.match.params.projectId)}>
                <Form method={this.state.method} action={this.state.action} onSuccess={() => { this.props.history.push(this.context.view.tasks.projectTasks(this.props.match.params.projectId)) }}>
                    <div>
                        <label htmlFor="taskFormNameInput">Name</label>
                        <input id="taskFormNameInput" name="name" type="text" />
                    </div>
                    <div>
                        <input type="hidden" name="project" id="taskFormProjectInput" value={this.props.match.params.projectId}/>
                    </div>
                    <div>
                        <label htmlFor="taskFormDescriptionInput">Description</label>
                        <input id="taskFormDescriptionInput" name="description" type="text" />
                    </div>
                    <div>
                        <label htmlFor="taskFormRateInput">Rate</label>
                        <input id="taskFormRateInput" name="rate" type="number" />
                    </div>
                    <div>
                        <label htmlFor="taskFormStartDateInput">Start Date</label>
                        <input id="taskFormStartDateInput" name="startDate" type="datetime-local" />
                    </div>
                    <div>
                        <label htmlFor="taskFormDueDateInput">Due Date</label>
                        <input id="taskFormDueDateInput" name="dueDate" type="datetime-local" />
                    </div>
                    <div className="button-container">
                        <button className="secondary-button" type="submit">{this.state.verb} Task</button>
                    </div>
                </Form>
            </Modal>
        );
    }
}

TaskFormWithoutRouter.contextType = RoutesContext;
const TaskForm = withRouter(TaskFormWithoutRouter)

export { TaskForm }
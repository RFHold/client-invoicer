import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { CompanyContext } from "../../Contexts"

class ProjectForm extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.action = (props.action) ? props.action : this.context.routes.projectsRoute
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }

    render() {
        return (
            <Form method={this.state.method} action={this.state.action}>
                <h1>Create Project</h1>
                <div>
                    <label htmlFor="projectFormNameInput">Name</label>
                    <input id="projectFormNameInput" name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="projectFormDescriptionInput">Description</label>
                    <input id="projectFormDescriptionInput" name="description" type="text" />
                </div>
                <div>
                    <label htmlFor="projectFormStartDateInput">Start Date</label>
                    <input id="projectFormStartDateInput" name="startDate" type="datetime-local" />
                </div>
                <div>
                    <label htmlFor="projectFormDueDateInput">Due Date</label>
                    <input id="projectFormDueDateInput" name="dueDate" type="datetime-local" />
                </div>
                <button type="submit">{this.state.verb} Project</button>
            </Form>
        );
    }
}

ProjectForm.contextType = CompanyContext;

export { ProjectForm }
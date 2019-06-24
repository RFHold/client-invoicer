import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { CompanyContext } from "../../Contexts"
import { withRouter } from 'react-router-dom';
import ListView from '../../ListView';

function SelectItem ({ data: option }) {
    return (
        <option value={option.id}>{option.name}</option>
    );
}


class ProjectFormWithoutRouter extends Component {
    constructor(props) {
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }
    componentDidMount() {
        this.setState({ action: (this.props.action) ? this.props.action : this.context.routes.projectsRoute })
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
                    <label htmlFor="projectFormClientInput">Client</label>
                    <select name="client" id="projectFormClientInput">
                        <option value="">Select a Client</option>
                        <ListView itemComponent={SelectItem} resource={this.context.routes.clientsRoute}/>
                    </select>
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

ProjectFormWithoutRouter.contextType = CompanyContext;
const ProjectForm = withRouter(ProjectFormWithoutRouter)

export { ProjectForm }
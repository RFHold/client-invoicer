import React, { PureComponent as Component } from "react";
import Form from '../../Form';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: props.company
        };
    }

    render() {
        return (
            <Form method="POST" action={`/api/company/${this.state.company}/projects`}>
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
                <button type="submit">Create Project</button>
            </Form>
        );
    }
}

export default Project;
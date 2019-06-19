import React, { PureComponent as Component } from "react";
import Form from '../../Form';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: props.company
        };
    }

    render() {
        return (
            <Form method="POST" action={`/api/company/${this.state.company}/tasks`}>
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
                <button type="submit">Create Task</button>
            </Form>
        );
    }
}

export default Task;
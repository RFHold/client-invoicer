import React, { PureComponent as Component } from "react";
import Form from "../../../Utilities/Form";
import { RoutesContext } from "../../../../Contexts";
import { withRouter } from "react-router-dom";
import ListView from "../../../Utilities/ListView";
import Modal from "../../../Utilities/Modal";

function SelectItem({ data: option }) {
  return <option value={option.id}>{option.name}</option>;
}

class ProjectFormWithoutRouter extends Component {
  constructor(props) {
    super(props);

    const state = {};

    state.method = props.type === "edit" ? "PATCH" : "POST";
    state.verb = props.type === "edit" ? "Edit" : "Create";

    this.state = state;
  }
  componentDidMount() {
    this.setState({ action: this.props.action ? this.props.action : this.context.api.projects });
  }

  render() {
    return (
      <Modal header={`${this.state.verb} Project`} onClose={this.context.view.projects.all}>
        <Form
          method={this.state.method}
          action={this.state.action}
          onSuccess={() => {
            this.props.history.push(this.context.view.projects.all);
          }}>
          <h1>Create Project</h1>
          <div>
            <label htmlFor="projectFormNameInput">Name</label>
            <input id="projectFormNameInput" name="name" type="text" />
          </div>
          <div>
            <label htmlFor="projectFormClientInput">Client</label>
            <select name="client" id="projectFormClientInput">
              <option value="">Select a Client</option>
              <ListView
                itemComponent={SelectItem}
                resource={this.context.api.clients} />
            </select>
          </div>
          <div>
            <label htmlFor="projectFormDescriptionInput">Description</label>
            <input
              id="projectFormDescriptionInput"
              name="description"
              type="text" />
          </div>
          <div>
            <label htmlFor="projectFormStartDateInput">Start Date</label>
            <input
              id="projectFormStartDateInput"
              name="startDate"
              type="datetime-local" />
          </div>
          <div>
            <label htmlFor="projectFormDueDateInput">Due Date</label>
            <input
              id="projectFormDueDateInput"
              name="dueDate"
              type="datetime-local" />
          </div>
          <button type="submit">{this.state.verb} Project</button>
        </Form>
      </Modal>
    );
  }
}

ProjectFormWithoutRouter.contextType = RoutesContext;
const ProjectForm = withRouter(ProjectFormWithoutRouter);

export { ProjectForm };

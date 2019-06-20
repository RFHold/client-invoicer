import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { CompanyContext } from "../../Contexts"

class CompanyForm extends Component {

    constructor(props){
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.action = (props.action) ? props.action : this.context.routes.companiesRoute
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }

    render() {
        return (
            <Form method={this.state.method} action={this.state.action}>
                <h1>Create Company</h1>
                <div>
                    <label htmlFor="companyFormNameInput">Name</label>
                    <input id="companyFormNameInput" name="name" type="text" />
                </div>
                <button type="submit">{this.state.verb} Company</button>
            </Form>
        );
    }
}

CompanyForm.contextType = CompanyContext;

export { CompanyForm }
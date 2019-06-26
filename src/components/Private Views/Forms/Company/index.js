import React, { PureComponent as Component } from "react";
import Form from '../../../Utilities/Form';
import { RoutesContext } from "../../../../Contexts"
import { withRouter } from 'react-router-dom';

class CompanyFormWithoutRouter extends Component {

    constructor(props){
        super(props)

        const state = {}

        state.method = (props.type === "edit") ? "PATCH" : "POST"
        state.verb = (props.type === "edit") ? "Edit" : "Create"

        this.state = state
    }
    componentDidMount() {
        this.setState({ action: (this.props.action) ? this.props.action : this.context.routes.companiesRoute })
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

CompanyFormWithoutRouter.contextType = RoutesContext;
const CompanyForm = withRouter(CompanyFormWithoutRouter)

export { CompanyForm }
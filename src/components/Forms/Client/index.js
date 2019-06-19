import React, { PureComponent as Component } from "react";
import Form from '../../Form';
import { CompanyContext } from "../../Contexts"

export class ClientForm extends Component {
    render() {
        return (
            <CompanyContext.Consumer>
                {
                    ctx => (
                        <Form method="POST" action={ctx.routes.clientsRoute}>
                            <h1>Create Client</h1>
                            <div>
                                <label htmlFor="clientFormNameInput">Name</label>
                                <input id="clientFormNameInput" name="name" type="text" />
                            </div>
                            <button type="submit">Create Client</button>
                        </Form>
                    )
                }
            </CompanyContext.Consumer>
        );
    }
}
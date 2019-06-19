import React, { PureComponent as Component } from "react";
import Form from '../../Form';

class Client extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: props.company
        };
    }

    render() {
        return (
            <Form method="POST" action={`/api/company/${this.state.company}/clients`}>
                <h1>Create Client</h1>
                <div>
                    <label htmlFor="clientFormNameInput">Name</label>
                    <input id="clientFormNameInput" name="name" type="text" />
                </div>
                <button type="submit">Create Client</button>
            </Form>
        );
    }
}

export default Client;
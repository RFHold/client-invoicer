import React, { useState, PureComponent as Component } from "react";

class Form extends Component(props) {

    constructor(props) {
        super(props);

        this.state = {
            method: props.method,
            action: props.action
        };
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render(){
        return (
            <form ref={(el) => this.form = el} method={this.state.method} action={this.state.action}>
                {props.children}
            </form>
        )
    }
}

Form.defaultProps = {
    method: "POST"
};

export default Form;

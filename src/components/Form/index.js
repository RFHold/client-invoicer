import React, { PureComponent as Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);

        this.children = props.children

        this.state = {
            method: props.method,
            action: props.action,
            formData: {}
        };
    }

    handleInputChange(event) {
        const input = event.target
        console.log(input.value);
        const formData = this.state.formData

        formData[input.name] = input.value

        this.setState({ formData: formData })
    }

    componentDidMount() {
        this.parseForm()
    }

    componentDidUpdate(){
        for (const input of this.$form.querySelectorAll("input")) {
            input.value = this.state.formData[input.name]
        }
    }

    componentWillUnmount() {
    }

    render(){
        return (
            <form ref={(el) => this.$form = el} method={this.state.method} action={this.state.action}>
                {this.children}
            </form>
        )
    }

    parseForm(){
        const formData = {}

        for (const input of this.$form.querySelectorAll("input")) {
            input.onchange = (ev) => { this.handleInputChange(ev) }
            formData[input.name] = input.value
        }

        this.setState({ formData: formData })
    }
}

Form.defaultProps = {
    method: "POST"
};

export default Form;

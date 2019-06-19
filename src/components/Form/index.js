import React, { PureComponent as Component } from "react";
import axios from "axios";

class Form extends Component {

    constructor(props) {
        super(props);

        this.children = props.children
        this.onSuccess = props.onSuccess
        this.onError = props.onError

        this.state = {
            method: props.method,
            action: props.action,
            formData: props.formData || {}
        };
    }

    handleInputChange(event) {
        const input = event.target
        console.log(input.value);
        const formData = this.state.formData

        formData[input.name] = input.value

        this.setState({ formData: formData })
    }

    handleSubmit(event) {
        event.preventDefault()

        axios({
            method: this.state.method,
            url: this.state.action,
            data: this.state.formData
        }).then((response) => {
            this.onSuccess(response)
        }).catch((error) => {
            this.onError(error)
        })
    }

    componentDidMount() {
        const formData = {}

        for (const input of this.$form.querySelectorAll("input")) {
            input.oninput = (ev) => { this.handleInputChange(ev) }
            if (formData[input.name]) {
                input.value = formData[input.name]
            }else{
                formData[input.name] = input.value
            }
        }

        this.setState({ formData: formData })
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
            <form ref={(el) => this.$form = el} method={this.state.method} action={this.state.action} onSubmit={(ev) => {this.handleSubmit(ev)}}>
                {this.children}
            </form>
        )
    }
}

Form.defaultProps = {
    method: "POST",
    onSuccess: () => { },
    onError: () => { }
};

export default Form;

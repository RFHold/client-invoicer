import React, { PureComponent as Component } from "react";
import axios from "axios";

class Form extends Component {

    constructor(props) {
        super(props);

        this.children = props.children
        this.onSuccess = props.onSuccess
        this.onError = props.onError
        
        if (props.method === "PATCH"){
            axios({
                method: "GET",
                url: props.action
            }).then((response) => {
                this.setState({formData: response.data.result})
            }).catch((error) => {
                this.onError(error)
            })
        }

        this.state = {
            method: props.method,
            action: props.action,
            formData: props.formData || {}
        };
    }

    handleInputChange(event) {
        const input = event.target
        const formData = this.state.formData

        formData[input.name] = input.value

        this.setState({ formData: formData })
    }

    handleSubmit(event) {
        event.preventDefault()

        axios({
            method: this.props.method,
            url: this.props.action,
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
            <form ref={(el) => this.$form = el} method={this.props.method} action={this.props.action} onSubmit={(ev) => {this.handleSubmit(ev)}}>
                {this.props.children}
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

import React, { useState } from "react";

function Form(props) {

    const state = { }

    for (const [key, input] of Object.entries(props.inputs)) {
        const [variable, setVariable] = useState(input.value || input || "")
        state[key] = { get: variable, set: setVariable}
    }

    const handleFormSubmit = event => {
        event.preventDefault();

    };

    return (
        <div>
            {props.children}
        </div>
    )
}

export default Form;

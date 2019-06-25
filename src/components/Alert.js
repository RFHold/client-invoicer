import React from 'react';

function Alert (props) {
    return (
        <div style={{position: "fixed", backgroundColor: "white", zIndex: "999", top: "50%", left: "50%", border: "solid 1px black"}}>
        <h2>{props.message}</h2>
        <button onClick={props.onclick}>Okay</button>
        </div>
    )
}

export default Alert;
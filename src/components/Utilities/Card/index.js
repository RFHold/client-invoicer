import React from "react";
import "../../../stylesheets/main.scss";


function Card(props) {

    return (<div className="card"> {props.children}</div>)

}

export default Card;
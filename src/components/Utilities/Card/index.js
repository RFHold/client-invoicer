import React from "react";
import "../../../stylesheets/components/_card.scss";


function Card(props) {

    return (<div className="card"> {props.children}</div>)

}

export default Card;
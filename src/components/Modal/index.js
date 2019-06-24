import React, {useState} from "react";

function Modal(props){
    const [visable, setVisable] = useState
    return (
        <div className={`modal ${(visable) ? `` :`hidden`}`}>
            {props.children}
        </div>
    );
}

export default Modal
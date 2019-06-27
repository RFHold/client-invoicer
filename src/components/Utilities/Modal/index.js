import React, { useState } from "react";
import "../../../stylesheets/main.scss";
import { withRouter } from 'react-router-dom';

function Modal(props) {
    const [visible, setVisible] = useState(true)

    function close() {
        props.history.push(props.onClose)
        setVisible(false)
    }
    return (
        <div className={`modal ${(visible) ? `` : `hidden`}`}>
            <div className="modal-content">
                <div className="modal-header"><h3>{props.header}</h3><i onClick={() => { close() }} className="fas fa-times"></i></div>
                <div className="modal-body">{props.children}</div>
            </div>
        </div>
    );
}

export default withRouter(Modal)
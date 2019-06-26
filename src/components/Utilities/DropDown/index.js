import React, { useState } from "react";
import "./styles.css";

function DropDown({ header, children: options, className }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`drop-down ${open ? "open" : ""} ${className}`} onClick={() => { setOpen(!open) }} onBlur={(e) => { if (!e.relatedTarget) setOpen(false) }}>
            <button id="user-button"><i class="fas fa-user"></i>{header}<i class="fas fa-angle-down"></i></button>
            <div className="options">
                {options}
            </div>
        </div>
    )
}

export default DropDown;

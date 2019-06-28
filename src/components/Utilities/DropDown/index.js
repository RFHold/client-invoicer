import React, { useState } from "react";
import "../../../stylesheets/main.scss";

function DropDown({ header, children: options, className }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`drop-down ${open ? "open" : ""} ${className}`} onClick={() => { setOpen(!open) }} onBlur={(e) => { if (!e.relatedTarget) setOpen(false) }}>
            {header}
            <div className="options">
                {options}
            </div>
        </div>
    )
}

export default DropDown;

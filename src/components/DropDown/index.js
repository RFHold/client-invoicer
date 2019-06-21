import React, { useState } from "react";
import "./styles.css";

function DropDown({ header, children: options }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`drop-down ${(open) ? "open" : ""}`} onClick={() => { setOpen(!open) }} onBlur={(e) => { if(!e.relatedTarget) setOpen(false) }}>
            <button>{header}</button>
            <div className="options">
                {options}
            </div>
        </div>
    )
}

export default DropDown;

import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { RoutesContext } from "../../../Contexts";
import "../../../stylesheets/main.scss";

function Navbar() {
    const context = useContext(RoutesContext);
    return (

        <div className="col-xs-2" id="links-col">
            <Link to={context.view.index} className="nav-link"><button className="navbar-button"><i className="fas fa-chart-line"></i>Dashboard</button></Link>

            <Link to={context.view.clients.all} className="nav-link"><button className="navbar-button"><i className="fas fa-user-tie"></i>Clients</button></Link>

            <Link to={context.view.projects.all} className="nav-link"><button className="navbar-button"><i className="fas fa-folder"></i>Projects</button></Link>

            <Link to={context.view.invoices.all} className="nav-link"><button className="navbar-button"><i className="fas fa-file-invoice-dollar"></i>Invoices</button></Link>

            {/* <Link to={context.view.reports} class="nav-link"><button class="navbar-button"><i class="fas fa-th-list"></i>Reports</button></Link> */}
        </div>
    );
}

export default Navbar;
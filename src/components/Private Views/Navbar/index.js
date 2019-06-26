import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { RoutesContext } from "../../../Contexts";
import "../../../stylesheets/layout/_navbar.scss";

function Navbar() {
    const context = useContext(RoutesContext);
    return (
        <div className="container-fluid" id="navbar-container">
            <div className="row" id="navbar-row">
                <div className="col-xs-12" id="links-col">
                    <Link to={context.view.index} className="nav-link"><button className="navbar-button"><i className="fas fa-chart-line"></i>Dashboard</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.view.projects.all} className="nav-link"><button className="navbar-button"><i className="fas fa-folder"></i>Projects</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.view.tasks.all} className="nav-link"><button className="navbar-button"><i className="fas fa-folder"></i>Tasks</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.view.clients.all} className="nav-link"><button className="navbar-button"><i className="fas fa-user-tie"></i>Clients</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.view.invoices} className="nav-link"><button className="navbar-button"><i className="fas fa-file-invoice-dollar"></i>Invoices</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    {/* <Link to={context.view.reports} class="nav-link"><button class="navbar-button"><i class="fas fa-th-list"></i>Reports</button></Link> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
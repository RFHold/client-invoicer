import React, {useContext} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import { RoutesContext } from "../../../Contexts";
import "./style.css";

function Navbar() {
    const context = useContext(RoutesContext);
    return (
        <Grid fluid id="navbar-container">
            <Row id="navbar-row">
                <Col xs={12} id="links-col">
                    <Link to={context.view.index} class="nav-link"><button class="navbar-button"><i class="fas fa-chart-line"></i>Dashboard</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.view.projects.all} class="nav-link"><button class="navbar-button"><i class="fas fa-folder"></i>Projects</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.view.tasks.all} class="nav-link"><button class="navbar-button"><i class="fas fa-folder"></i>Tasks</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.view.clients.all} class="nav-link"><button class="navbar-button"><i class="fas fa-user-tie"></i>Clients</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    <Link to={context.view.invoices.all} class="nav-link"><button class="navbar-button"><i class="fas fa-file-invoice-dollar"></i>Invoices</button></Link>
                    {/* </Col>
                <Col xs={12} class="links-col"> */}
                    {/* <Link to={context.view.reports} class="nav-link"><button class="navbar-button"><i class="fas fa-th-list"></i>Reports</button></Link> */}
                </Col>
            </Row>  
        </Grid>
    );
}

export default Navbar;
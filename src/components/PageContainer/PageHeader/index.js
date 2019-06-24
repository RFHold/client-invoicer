import React, { useContext } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function PageHeader() {
    return (
        <div id="client-container">
            <Row className="page-header">
                <Col xs={6}>
                    <h2>Clients</h2>
                </Col>
                <Col xs={6}>
                    <Row end="xs">
                        <button id="new-client-button"><i class="fas fa-plus"></i>Add New Client</button>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Row bottom="xs">
                        <ul>
                            <li><Link to="/clients">Active Clients</Link></li>
                            <li><Link to="/clients">Inactive Clients</Link></li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default PageHeader;
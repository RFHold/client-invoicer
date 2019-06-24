import React, { useContext } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function PageHeader() {
    return (
        <div>
            <Row className="page-header">
                <Col xs={6}>
                    <h2>Clients</h2>
                </Col>
                <Col xs={6}>
                    <button>Add New Client</button>
                </Col>
            </Row>
            <Row className="page-links">
                <Col xs={12}>
                    <ul>
                        <li>Active Clients</li>
                        <li>Inactive Clients</li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default PageHeader;
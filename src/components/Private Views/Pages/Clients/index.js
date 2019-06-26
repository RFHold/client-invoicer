import React, { useContext } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { CompanyContext } from '../../../../Contexts';
import "./style.css";
import ListView from "../../../Utilities/ListView";

function ListItem({ data: client }) {
    return (
        <div id="client-card">
            <h1>{client.name}</h1>
            {/* <Form method="DELETE" action={context.routes.deleteClientRoute(client.id)}>
        <input type="submit" value="Delete" />
      </Form> */}
        </div>
    );
}

function Clients() {
    const context = useContext(CompanyContext);

    return (
        <Grid fluid id="content-container">
            <div id="client-container">
                <Row className="page-header">
                    <Col xs={6}>
                        <h2>Clients</h2>
                    </Col>
                    <Col xs={6}>
                        <Row end="xs">
                            <Link to={context.routes.newClientViewRoute()} id="clients">
                                <button id="new-client-button">
                                    <i className="fas fa-plus" />Add New Client
                </button>
                            </Link>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row bottom="xs">
                            <ul>
                                <li>
                                    <Link to="/clients">Active Clients</Link>
                                </li>
                                <li>
                                    <Link to="/clients">Inactive Clients</Link>
                                </li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xs={12}>
                    <ListView
                        itemComponent={ListItem}
                        resource="/api/company/1/clients"
                    />
                </Col>
            </Row>
        </Grid>
    );
}

export default Clients;

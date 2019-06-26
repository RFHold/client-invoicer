import React, { useContext } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { RoutesContext } from '../../../../Contexts';
import "./style.css";
import ListView from "../../../Utilities/ListView";
import Form from "../../../Utilities/Form";

function ListItem({ data: client }) {
    const context = useContext(RoutesContext);
    return (
        <div id="client-card">
            <h1>{client.name}</h1>
            {<Form method="DELETE" action={context.api.client(client.id)}>
        <input type="submit" value="Delete" />
      </Form>}
        </div>
    );
}

function Clients() {
    const context = useContext(RoutesContext);

    return (
        <Grid fluid id="content-container">
            <div id="client-container">
                <Row className="page-header">
                    <Col xs={6}>
                        <h2>Clients</h2>
                    </Col>
                    <Col xs={6}>
                        <Row end="xs">
                            <Link to={context.view.clients.new} id="clients">
                                <button id="new-client-button">
                                    <i class="fas fa-plus" />Add New Client
                </button>
                            </Link>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xs={12}>
                    <ListView
                        itemComponent={ListItem}
                        resource={context.api.clients}
                    />
                </Col>
            </Row>
        </Grid>
    );
}

export default Clients;

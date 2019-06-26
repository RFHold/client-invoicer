import React, { useContext } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { RoutesContext } from '../../../../Contexts';
import ListView from "../../../Utilities/ListView";
import Form from "../../../Utilities/Form";
import "./style.css"

function ListItem({ data: invoice }) {
    const context = useContext(RoutesContext);
    return (
        <div id="invoice-card">
            <h1>{invoice.name}</h1>
            {<Form method="DELETE" action={context.api.invoice(invoice.id)}>
                <input type="submit" value="Delete" />
            </Form>}
        </div>
    );
}

function Invoices() {
    const context = useContext(RoutesContext);

    return (
        <Grid fluid id="content-container">
            <div id="invoice-container">
                <Row className="page-header">
                    <Col xs={6}>
                        <h2>Invoices</h2>
                    </Col>
                    <Col xs={6}>
                        <Row end="xs">
                            <Link to={context.view.invoices.new} id="invoices">
                                <button id="new-invoice-button">
                                    <i class="fas fa-plus" />Add New Invoice
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
                        resource={context.api.invoices}
                    />
                </Col>
            </Row>
        </Grid>
    );
}

export default Invoices;

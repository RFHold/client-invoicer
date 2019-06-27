import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RoutesContext } from '../../../../Contexts';
import ListView from "../../../Utilities/ListView";
import Form from "../../../Utilities/Form";
import "../../../../stylesheets/main.scss";

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
        <div className="container-fluid" id="content-container">
            <div id="invoice-container">
                <div className="row">
                    <div className="col-xs-6">
                        <h2>Invoices</h2>
                    </div>
                    <div className="col-xs-6">
                        <div className="row end-xs">
                            <Link to={context.view.invoices.new} id="invoices">
                                <button id="new-invoice-button">
                                    <i className="fas fa-plus" />Add New Invoice
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <ListView
                        itemComponent={ListItem}
                        resource={context.api.invoices}
                    />
                </div>
            </div>
        </div>
    );
}

export default Invoices;

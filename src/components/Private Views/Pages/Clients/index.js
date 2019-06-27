import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RoutesContext } from '../../../../Contexts';
import "../../../../stylesheets/layout/_clients-projects-tasks.scss";
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
        <div className="container-fluid" id="content-container">
            <div id="client-container">
                <div className="row page-header">
                    <div className="col-xs-6">
                        <h2>Clients</h2>
                    </div>
                    <div className="col-xs-6">
                        <div className="row end-xs">
                            <Link to={context.view.clients.new} id="clients">
                                <button id="new-client-button">
                                    <i className="fas fa-plus" />Add New Client
                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="row bottom-xs">
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <ListView
                        itemComponent={ListItem}
                        resource={context.api.clients}
                    />
                </div>
            </div>
        </div>
    );
}

export default Clients;

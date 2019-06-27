import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RoutesContext } from '../../../../Contexts';
import "../../../../stylesheets/main.scss";
import Form from "../../../Utilities/Form";
import Card from "../../../Utilities/Card";
import DropDown from "../../../Utilities/DropDown";
import ListView from "../../../Utilities/ListView";


function ListItem({ data: client }) {
    const context = useContext(RoutesContext);
    return (
        <Card>
            <div className="row center-xs">
                <div className="col-xs-11">
                    <div className="row center-xs">
                        <h3>{client.name}</h3>
                    </div>
                </div>
                <div className="col-xs-1">
                    <div className="row end-xs">
                        <DropDown header={<i className="fas fa-ellipsis-v"></i>} className="dropdown">
                            <div id="project-options">
                                <div>
                                    {<Form method="DELETE" action={context.api.client(client.id)}>
                                        <input type="submit" value="Delete" />
                                    </Form>}
                                </div>
                            </div>
                        </DropDown>
                    </div>
                </div>
            </div>
        </Card>
    );
}

function Clients() {
    const context = useContext(RoutesContext);

    return (
        <div className="col-xs-10" id="content-container">
            <div className="row middle-xs" id="content-header">
                <div className="col-xs-6">
                    <h2>Clients</h2>
                </div>
                <div className="col-xs-6">
                    <div className="row end-xs">
                        <Link to={context.view.clients.new} id="clients">
                            <button className="primary-button">
                                <i className="fas fa-plus" />Add New Client
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12" id="list-container">
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

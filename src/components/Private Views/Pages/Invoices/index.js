import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RoutesContext } from '../../../../Contexts';
import "../../../../stylesheets/main.scss";
import Form from "../../../Utilities/Form";
import Card from "../../../Utilities/Card";
import DropDown from "../../../Utilities/DropDown";
import ListView from "../../../Utilities/ListView";
import FileDownload from "js-file-download";
import axios from "axios";


function ListItem({ data: invoice }) {
    const context = useContext(RoutesContext);
    return (
        <Card>
            <div className="row center-xs">
                <div className="col-xs-11">
                    <div className="row center-xs">
                        <h3>{invoice.name}</h3>
                    </div>
                </div>
                <div className="col-xs-1">
                    <div className="row end-xs">
                        <DropDown header={<i className="fas fa-ellipsis-v"></i>} className="dropdown">
                            <div id="project-options">
                                <div>
                                    {<Form method="DELETE" action={context.api.invoice(invoice.id)}>
                                        <input type="submit" value="Delete" />
                                    </Form>}
                                </div>
                                <div>
                                    {
                                        <button onClick={() => { axios({ url: context.api.invoice(invoice.id), method: "GET", responseType: "blob"}).then((response) => { console.log(response.data);;FileDownload(response.data, 'invoice.pdf'); })} }>Download</button>
                                    }
                                </div>
                            </div>
                        </DropDown>
                    </div>
                </div>
            </div>
        </Card>
    );
}

function Invoices() {
    const context = useContext(RoutesContext);

    return (
        <div className="col-xs-10" id="content-container">
            <div className="row middle-xs" id="content-header">
                <div className="col-xs-6">
                    <h2>Invoices</h2>
                </div>
                <div className="col-xs-6">
                    <div className="row end-xs">
                        <Link to={context.view.invoices.new} id="invoices">
                            <button className="primary-button">
                                <i className="fas fa-plus" />Add New Invoice
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12" id="list-container">
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

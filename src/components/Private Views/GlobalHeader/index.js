import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "../../../stylesheets/main.scss";
import { RoutesContext, SessionContext } from "../../../Contexts";
import DropDown from "../../Utilities/DropDown"
import { Grid, Row, Col } from 'react-flexbox-grid';

function GlobalHeader() {
	const context = useContext(RoutesContext);
	const sessionContext = useContext(SessionContext);
	return (
		<div className="row" id="header-container">
			<div className="col-xs-2" id="brand-col">
				<div className="row center-xs bottom-xs">
					<Link to={context.view.index} id="brand"><h1>Optime</h1></Link>
				</div>
			</div>
			<div className="col-xs-10" id="user-col">
				<div className="row end-xs">
					<DropDown header={<button id="user-button"><i className="fas fa-user"></i>{sessionContext}<i className="fas fa-angle-down"></i></button>} className="dropdown">
						<div id="user-options">
							<div>
								<Link to="/login">Logout</Link>
							</div>
						</div>
					</DropDown>
				</div>
			</div>
		</div>
	);
}

export default GlobalHeader;
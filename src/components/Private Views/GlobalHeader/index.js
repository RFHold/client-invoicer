import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "../../../stylesheets/main.scss";
import { RoutesContext } from "../../../Contexts";
import DropDown from "../../Utilities/DropDown"

function GlobalHeader() {
	const context = useContext(RoutesContext);
	return (
		<div className="row" id="header-container">
			<div className="col-xs-2" id="brand-col">
				<div className="row center-xs bottom-xs">
					<Link to={context.view.index} id="brand"><h1>Optime</h1></Link>
				</div>
			</div>
			<div className="col-xs-10" id="user-col">
				<div className="row end-xs">
					<DropDown header={<button id="user-button"><i className="fas fa-user"></i>Username<i className="fas fa-angle-down"></i></button>} className="dropdown">
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
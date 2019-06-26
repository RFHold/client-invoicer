import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "../../../stylesheets/layout/_header.scss";
import { RoutesContext } from "../../../Contexts";
import DropDown from "../../Utilities/DropDown"

function GlobalHeader() {
	const context = useContext(RoutesContext);
	return (
		<div className="container-fluid" id="global-header-container">
			<div className="row" id="global-header-row">
				<div className="col-xs-2" id="brand-col">
					<Link to={context.view.index} id="brand"><i className="fas fa-circle"></i>App Name</Link>
				</div>
				<div className="col-xs-10" id="headernav-col">
					<div className="row end-xs" id="header-links">
						<div id="timers">
							<i className="fas fa-stopwatch"></i>
						</div>
						<DropDown header="Username" className="dropdown">
							<div id="user-options">
								<div>
									<Link to="/login">Login</Link>
								</div>
								<div>
									<Link to="/register">Register</Link>
								</div>
							</div>
						</DropDown>
					</div>
				</div>
			</div>
		</div >
	);
}

export default GlobalHeader;
import React, { useContext } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";
import { RoutesContext } from "../../../Contexts";
import DropDown from "../../Utilities/DropDown"

function GlobalHeader() {
	const context = useContext(RoutesContext);
	return (
		<Grid fluid id="global-header-container">
			<Row id="global-header-row">
				<Col xs={2} id="brand-col">
					<Link to={context.view.index} id="brand"><i className="fas fa-circle"></i>App Name</Link>
				</Col>
				<Col xs={10} id="headernav-col">
					<Row end="xs" id="header-links">
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
					</Row>
				</Col>
			</Row>
		</Grid >
	);
}

export default GlobalHeader;
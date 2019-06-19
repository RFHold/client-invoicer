import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function GlobalHeader() {
	return (
		<Grid fluid id="global-header-container">
			<Row id="global-header-row">
				<Col xs={6} id="brand-col">
					<Link to="/dashboard" id="brand">App Name</Link>
				</Col>
				<Col xs={6} id="links-col">
					<Row end="xs" id="header-links">
						<div id="timers">
							Timers
						</div>
						<div id="user">
							Username
						</div>
					</Row>
				</Col>
			</Row>
		</Grid>
	);
}

export default GlobalHeader;
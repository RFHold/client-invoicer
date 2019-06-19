import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function GlobalHeader() {
	return (
		<Grid fluid id="global-header-container">
			<Row>
				<Col xs={6}>
					<Link to="/" id="brand">App Name</Link>
				</Col>
				<Col xs={6}>
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
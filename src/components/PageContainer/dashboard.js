import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";
import {Timecard,Taskcard,Projectcard} from "../PageContainer/"


function Dashboard() {
	return (
		<Grid fluid id="dashboard-items">
			<Row>
				<Col xs={12}>
					<Timecard/>
				</Col>
			</Row>
            <Row>
				<Col xs={12}>
					<Taskcard/>
				</Col>
			</Row>
            <Row>
				<Col xs={12}>
					<Projectcard/>
				</Col>
			</Row>
		</Grid>
	);
}

export default Dashboard;
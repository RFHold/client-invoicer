import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import "./style.css";

function PageContainer() {
	return (
		<Grid fluid id="page-container">
			<Row>
				<Col xs={12}>
					<p>Hello World</p>
				</Col>
			</Row>
		</Grid>
	);
}

export default PageContainer;
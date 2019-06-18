import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
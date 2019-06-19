import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            Hello, world!
            <Form method="POST" action="/api/session">
              <h1>Form</h1>
              <div>
                <label htmlFor="sessionFormLoginInput">Username or Email</label>
                <input id="sessionFormLoginInput" name="login" type="text" />
              </div>
              <div>
                <label htmlFor="sessionFormPasswordInput">Password</label>
                <input id="sessionFormPasswordInput" name="password" type="password" />
              </div>
              <button type="submit">Login</button>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
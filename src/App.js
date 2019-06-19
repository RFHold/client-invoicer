import React, {PureComponent as Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 1
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

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
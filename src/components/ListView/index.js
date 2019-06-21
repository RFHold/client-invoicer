import React from "react";
import axios from "axios";

class ListView extends React.PureComponent {
  state = {
    results: []
  };

  componentDidMount() {
    axios({
      method: "GET",
      url: this.props.resource
    })
      .then(response => {
        this.setState({ results: response.data.results || [response.data.result]});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const ItemComponent = this.props.itemComponent;
    return this.state.results.map(item => <ItemComponent key={item.id} data={item} />);
  }
}

export default ListView;

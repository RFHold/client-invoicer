import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalHeader from "./components/GlobalHeader";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalHeader />
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
import React, { Component } from "react";
import logo from "./logo.svg";
import Head from "./components/Head/Head";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <First />
        <Second />
        <Third />
      </div>
    );
  }
}

export default App;

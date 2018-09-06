import React, { Component } from "react";
import logo from "./logo.svg";
import Head from "./components/Head/Head";
import First from "./components/First/First";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <div className="app_text">This is my first React app</div>
        <First />
      </div>
    );
  }
}

export default App;

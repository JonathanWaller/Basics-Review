import React, { Component } from "react";
import "./Second.css";

class Second extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      imageUrl: ""
    };
  }

  handleLocation = e => {
    this.setState({ location: e.target.value });
  };

  handleURL = e => {
    this.setState({ imageUrl: e.target.value });
  };

  render() {
    console.log("location ", this.state.location);
    console.log("url ", this.state.imageUrl);
    return (
      <div className="second_wrapper">
        <span>Location:</span>
        <input
          onChange={e => {
            this.handleLocation(e);
          }}
        />
        <span>URL:</span>
        <input
          onChange={e => {
            this.handleURL(e);
          }}
        />

        <div>{this.state.location}</div>
        <img src={this.state.imageUrl} />
      </div>
    );
  }
}

export default Second;

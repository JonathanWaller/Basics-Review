import React, { Component } from "react";

class Third extends Component {
  constructor() {
    super();
    this.state = {
      cars: ["Ford", "Toyota", "Chevy", "Nissan"]
    };
  }

  render() {
    let myCars = this.state.cars.map((elem, ind) => {
      return (
        <div key={ind}>
          <div>{elem}</div>
        </div>
      );
    });
    return (
      <div>
        {/* <p>test3</p> */}
        {myCars}
      </div>
    );
  }
}

export default Third;

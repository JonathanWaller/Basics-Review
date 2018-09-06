import React, { Component } from "react";

class First extends Component {
  constructor() {
    super();
    this.state = {
      //   cars: ["chevy", "ford", "toyota", "nissan", "jeep"],
      userInput: "hello",
      results: ""
    };
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleClick = userInput => {
    // alert("Hello!!!");
    this.setState({ results: this.state.userInput });
  };

  render() {
    // console.log("userInput ", this.state.userInput);
    // console.log("results ", this.state.results);
    // let myTest = this.state.cars.map((elem, ind) => {
    //   return (
    //     <div key={ind}>
    //       <div>{elem}</div>
    //     </div>
    //   );
    // });
    return (
      <div>
        {/* <div>hello from First</div> */}
        <input
          placeholder="enter text here"
          onChange={e => this.handleChange(e)}
        />
        <button onClick={() => this.handleClick(this.state.userInput)}>
          Enter
        </button>
        <div>{this.state.results}</div>
        {/* {myTest} */}
      </div>
    );
  }
}

export default First;

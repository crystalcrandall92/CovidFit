import "../components/css/styles.css";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

class Fitness extends Component {
 
  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    )
  }
}

export default Fitness;
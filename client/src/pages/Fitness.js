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
        <img src={process.env.PUBLIC_URL + "images/naturerun.jpg"} position= "fixed" width="100%" height="100%" background-size="cover" backgournd-position="center" alt="fitness" />
      </div>
    )
  }
}

export default Fitness;
import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import "../components/css/styles.css"

// setting state to value and books
class Signin extends Component {

  render() {
    return (
      <div className="signinbg">
        <Nav />
        <Header />
      </div>
    )
  }
}



export default Signin;

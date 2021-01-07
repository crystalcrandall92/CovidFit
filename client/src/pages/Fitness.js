import "../components/css/styles.css";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
//import API from "../utils/API";
//import SearchContainer from "../components/SearchContainer";


class Fitness extends Component {
  state = {
    savedList: []
  }
  
  //componentDidMount() {
  //  API.savedList()
  //  .then(savedList => this.setState({ savedList: savedList }))
  //}
  
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
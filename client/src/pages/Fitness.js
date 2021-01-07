import "../components/css/styles.css";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import API from "../utils/API";
//import SearchContainer from "../components/SearchContainer";

class Fitness extends Component {
  state = {
    savedList: []
  }
  
  componentDidMount() {
    API.savedList()
    .then(savedList => this.setState({ savedList: savedList }))
  }
  
  render() {
    return (
      <div>
      <Nav />
      <Header />
      <h1>Your saved items to calorie count.</h1>
      
      </div>
    )
  }
}

export default Fitness;
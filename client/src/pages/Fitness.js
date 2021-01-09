import "../components/css/styles.css";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import "../components/css/styles.css";
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
      <div className="naturerun">
        <Nav />
        <Header />
        
      </div>
    )
  }
}

export default Fitness;
import "../components/css/styles.css";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import "../components/css/styles.css";
import BMIContainer from "../components/BMIContainer/BMIContainer";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import API from "../utils/API";


class Fitness extends Component {
  state = {
    savedFoods: []
  }
  
  async componentDidMount() {
    await API.savedFoods()
    .then(savedFoods => this.setState({ savedFoods: savedFoods }))
  }

  
  render() {
    return (
      <div className="naturerun">
        <Nav />
        <Header />
        <BMIContainer />
        <h1>Your Calorie Count:</h1>
      </div>
    )
  }
}

export default Fitness;
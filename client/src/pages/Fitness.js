import "../components/css/styles.css";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import "../components/css/styles.css";
import BMIContainer from "../components/BMIContainer/BMIContainer";
import SavedItems from "../components/SavedItems/SavedItems";
import API from "../utils/API";


class Fitness extends Component {
  state = {
    value: "",
    savedFoods: [],
    foods: [],
    basics: []
  }
  
  async componentDidMount() {
    await API.savedFoods()
    .then(savedFoods => this.setState({ savedFoods: savedFoods }))
  }

  handleDeleteFoods = async food => {
    try {
      const res = await API.deleteFood(food._id);
      this.setState({ savedFoods: this.state.savedFoods.filter(food => food._id !== res._id) })
    } catch (error) {
      console.warn(error)
    }
  }
  
  render() {
    return (
      <div className="naturerun">
        <Nav />
        <Header />
        <BMIContainer />
        <SavedItems foods={this.state.savedFoods} action={this.handleDeleteFoods} method="Delete" color="danger"/>
      </div>
    )
  }
}

export default Fitness;
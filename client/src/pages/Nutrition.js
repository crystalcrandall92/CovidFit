import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import API from '../utils/API'

class Nutrition extends Component {
  state = {
    foodName: "",
    title: []
  }

  componentDidMount() {
    this.foodSearch('peanut butter')
  }

  foodSearch = async (term) => {
    try {
      const res = await API.getFood(term)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    )
  }
}



export default Nutrition;

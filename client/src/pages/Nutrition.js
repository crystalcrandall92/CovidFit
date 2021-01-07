import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import API from '../utils/API';
import "../components/css/styles.css";
import SearchField from "../components/SearchField/SearchField";

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
        <SearchField />
        <img src={process.env.PUBLIC_URL + "/images/healthyFood.jpg"} position="fixed" width="100%" height="100%" />
        
      </div>
    )
  }
}



export default Nutrition;

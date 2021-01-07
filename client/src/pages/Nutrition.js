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
      <div className="healthyFood">
        <Nav />
        <Header />
        <SearchField />
        
        
      </div>
    )
  }
}



export default Nutrition;

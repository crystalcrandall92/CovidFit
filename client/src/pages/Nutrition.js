import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import API from '../utils/API';
import "../components/css/styles.css";
import SearchField from "../components/SearchField/SearchField";
import SearchContainer from "../components/SearchContainer/SearchContainer";

class Nutrition extends Component {
  state = {
    value: "",
    foods: [],
    basics: []
  }

  componentDidMount() {
    this.foodSearch()
  }

  foodSearch = async search => {
    try {
      const res = await API.getFood(search)
      console.log(res)
      this.setState({
        foods: res.data.branded.map(searchedFood => this.createFood(searchedFood)),
        basics: res.data.common.map(searchedFood => this.createFood(searchedFood)),
      },
      console.log(this))
    } catch (error) {
      console.log(error)
      console.log(this)
    }
  }

  createFood = (searchedFood) => ({
    Brand: searchedFood.brand_name,
    Name: searchedFood.food_name,
    ServingSize: searchedFood.serving_qty + " " + searchedFood.serving_unit,
    Calories: searchedFood.nf_calories,
    Photo: searchedFood.photo ? searchedFood.photo.thumb : undefined
  })

  handleInputChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();
    this.foodSearch(this.state.search);
  };

  handleSaveFood = async searchedFood => {
    try {
      await API.saveFood(searchedFood)
    } catch (error) {
      console.warn(error)
      console.log(this)
    }
  }

  render() {
    return (
      <div className="healthyFood">
        <Nav />
        <Header />
        <SearchField className="centerform" search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <SearchContainer foods={this.state.foods} action={this.handleSaveFood} method="Save" />
      </div>
    )
  }
}



export default Nutrition;

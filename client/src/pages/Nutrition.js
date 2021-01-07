import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import API from '../utils/API';
import "../components/css/styles.css";
import SearchField from "../components/SearchField/SearchField";

class Nutrition extends Component {
  state = {
    input: "",
    foods: []
  }

  componentDidMount() {
    this.foodSearch('peanut butter')
  }

  foodSearch = async (term) => {
    try {
      const res = await API.getFood(term)
      console.log(res)
      this.setState({
        foods: res.data.items.map(saveData => this.createList(saveData.volumeInfo))
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleFormSubmit = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="healthyFood">
        <Nav />
        <Header />
        <SearchField className="centerform" search={this.state.search} handleFormSubmit={this.handleFormSubmit} />
        <img src={process.env.PUBLIC_URL + "/images/healthyFood.jpg"} position="fixed" width="100%" height="100%" />
        
      </div>
    )
  }
}



export default Nutrition;

import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Covidcont from "../components/covidcont/covidcont";
import Contcard from "../components/container/container";
import "../components/css/styles.css";
import API from "../utils/API";
import "../components/css/fonts.css";


class Home extends Component {
  state = {
    statename: "",
    base: []
  }

  componentDidMount() {
    this.catchCOVID()

  }

  catchCOVID = async () => {
    const createdData = (covidData) => ({
      Positive: covidData.positive,
      Negative: covidData.negative,
      "Hospitalized Currently": covidData.hospitalizedCurrently,
      "ICU Currently": covidData.inIcuCurrently,
      Recovered: covidData.recovered,
      Death: covidData.death,
      "Death Increase": covidData.deathIncrease,
    })
    try {
      const res = await API.getHome();
      const mapped = res.data.map(x => createdData(x))
      this.setState({ base: mapped })
    } catch (error) {
      console.warn(error.message)
    }
  }


  render() {
    return (
      <div className="background">
        <Nav />
        <Header />
        <Contcard />
        <Covidcont data={this.state.base} />
      </div>
    )
  }
}

export default Home;
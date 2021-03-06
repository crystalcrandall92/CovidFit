import axios from "axios";

export default {
  getHome: function () {
    return axios.get(`https://api.covidtracking.com/v1/us/current.json`)
  },
  getFood: function (search) {
    return axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=' + search, {
      headers: {
        'x-app-id': process.env.REACT_APP_X_APP_ID,
        'x-app-key': process.env.REACT_APP_X_APP_KEY,
      }
    })
  },
  saveFood: function (saveData) {
    console.log(saveData)
    return axios.post("/api/covidfit", saveData)
    .then(result => result.data);
  },
  savedFoods: function () {
    return axios.get("/api/covidfit")
    .then(result => result.data);
  },
  deleteFood: function(id) {
    return axios.delete("/api/covidfit/" + id)
    .then(result => result.data);
  },
};

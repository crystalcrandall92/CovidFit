const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Dropping required as it causes error to occur in saving book to database
const foodSchema = new Schema({
    Brand: { type: String },
    Name: { type: String },
    ServingSize: { type: String },
    Calories: { type: String },
    Photo: { type: String }
});

const CovidFit = mongoose.model("Food", foodSchema);

module.exports = CovidFit;
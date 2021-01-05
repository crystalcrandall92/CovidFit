const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Dropping required as it causes error to occur in saving book to database
const foodSchema = new Schema({
});

const CovidFit = mongoose.model("Food", foodSchema);

module.exports = CovidFit;
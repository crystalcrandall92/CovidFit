const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Dropping required as it causes error to occur in saving book to database
const foodSchema = new Schema({
    food_name: { type: String },
    photo: { type: String },
    full_nutrients: { type: Array },
    serving_unit: { type: String },
    sub_recipe: { type: Array }
});

const CovidFit = mongoose.model("Food", foodSchema);

module.exports = CovidFit;
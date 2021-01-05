const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Foods collection and inserts the Foods below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/covidfit"
);


db.Food
    .remove({})
    .then(() => db.Food.collection.insertMany(FoodSeed))
    .then(data => {
        console.log(data.result.n);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
const express = require("express");
const cp = require("cookie-parser")
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require('./config/passport')
const cookieParser = require("cookie-parser")

const session = require("express-session")
const bodyParser = require("body-parser")

// connects the port to this or .env.PORT
const PORT = process.env.PORT || 3001;
require('dotenv').config({ silent: true })
const app = express();

// Cookies
app.use(cp())
//set cookies
// app.get('/set', (req, res) => {
//   // Set the new style cookie
//   res.cookie('3pcookie', 'value', { sameSite: 'none', secure: true });
//   // And set the same value in the legacy cookie
//   res.cookie('3pcookie-legacy', 'value', { secure: true });
//   res.end();
// });
//get cookies
// app.get('/', (req, res) => {
//   let cookieVal = null;

//   if (req.cookies['3pcookie']) {
//     // check the new style cookie first
//     cookieVal = req.cookies['3pcookie'];
//   } else if (req.cookies['3pcookie-legacy']) {
//     // otherwise fall back to the legacy cookie
//     cookieVal = req.cookies['3pcookie-legacy'];
//   }

//   res.end();
// });

// Define middleware here
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUnitialized: true
}))
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./controllers/userControllers")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here 
app.use(require("./routes"))

// Connect to the Mongo DB
mongoose.connect(process.env.ATLAS_URI || { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

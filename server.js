const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");


const users = require("./routes/api/users");

const app = express();
const PORT = process.env.PORT || 3001;

// allow for data transfer via url, and use of req.body json
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/communityblog").then(() => {
  console.log('mongodb connected')
})


// Passport middleware for authenticating requests
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

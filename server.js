const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");


const users = require("./routes/api/users");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
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
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/communityblog")

mongoose.connect("mongodb+srv://ayoussefinia:5e68UNK1MaUa2mFj@cluster0.uescv.mongodb.net/Blog?retryWrites=true&w=majority")
  .then(() => {
    console.log('mongodb connected')
  })


// const db = require("./config/keys").mongoURI;
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
  
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// Routes
// app.use("/api/users", users);

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

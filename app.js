const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
const schema = require("./schema/schema");

const graphqlHTTP = require("express-graphql");

const app = express();

// Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(cors());
// app.use(express.static(path.join(__dirname, "../")));

app.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);

// DB config
// const db = require("./config/keys").mongoURI;

//Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// Use Routes
// app.use();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Now listening for request on port ${port}"`);
});

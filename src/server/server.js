const express = require('express');
const os = require('os');
const db = require("./models");
const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:8081"
};

const app = express();

// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

//CORS Requests
app.use(cors(corsOptions));

app.use(express.static('dist'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app." });
});

//example using a route from the routes folder
// require('./routes/exampleRoute')(app);

//This line has the server (with express) initialized to listen on the port
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

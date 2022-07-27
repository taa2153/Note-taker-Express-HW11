// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

//express configuration
const app = express();

//initial portt
const PORT = process.env.PORT || 3000;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static());

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  
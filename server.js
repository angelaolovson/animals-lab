// Dependencies
const express = require("express");
const app = express();
const methodOverride = require('method-override');
require("dotenv").config();

// Middleware
app.set("view engine", "ejs")
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically
app.use(express.json());

// Models
// Views

// Controllers
const animalsController = require("./controllers/animals")
app.use("/animals", animalsController)


app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)
})
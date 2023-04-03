// Dependencies
const express = require("express");
const app = express();

// Middleware
app.set("view engine", "ejs")
// Models
// Controllers
// Views

require("dotenv").config();

const animalsController = require("./controllers/animals")
app.use("/animals", animalsController)


app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)
})
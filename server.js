// Dependencies
const express = require("express");
const app = express();


// Middleware
app.set("view engine", "ejs")
// Models
// Controllers
// Views

require("dotenv").config();

// Route
app.get("/", (req,res) => {
    res.render("animals/index")
})



app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)
})
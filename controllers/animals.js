const express = require("express");
const router = express.Router(); 
const Animal = require("../models/animal")

// Post
router.post("/", async (req,res) => {
    req.body.extinct = req.body.extinct === "on" ? true : false;
    res.redirect("/animals")
})


// Route - show all
router.get("/", async (req,res) => {
    res.render("animals/index")
})


// New
router.get("/new", (req,res) => {
    res.render("animals/new")
})


// Show
router.get("/:id", (req,res) => {
    res.render("animals/show")
})

// Post 
router.post("/", (req,res) => {
    animals.push(req.body)
    res.redirect("/animals")
})


module.exports = router;
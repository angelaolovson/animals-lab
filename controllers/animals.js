const express = require("express");
const router = express.Router(); 
const Animal = require("../models/animal")

// Post
router.post("/", async (req,res) => {
    req.body.extinct = req.body.extinct === "on" ? true : false;
    const animal = await Animal.create(req.body)
    res.redirect("/animals")
})

// New 
router.get("/new", (req,res) => {
    res.render("animals/new")
})



// Route - show all
router.get('/', async (req, res) => {
	// Animal.find() is a Promise
	// Promise is resoveld or rejected 
	const animals = await Animal.find({});
	// then run the next line of code
	// res.send(fruits);
	res.render("animals/index.ejs" , {animals});
});


// Show
router.get("/:id", async (req,res) => {
    const animal = await Animal.findById(req.params.id)
    res.render("animals/show", {animal})
})

// Delete
router.delete("/:id", async(req,res) => {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    res.redirect("/animals");
})

// Edit
router.get("/:id/edit", async (req,res) => {
    const animal = await Animal.findById(req.params.id);
    res.render("animals/edit", {animal})
})

// Update
router.put("/:id", async(req,res) => {
    const id = req.params.id;
    req.body.extinct = req.body.extinct === "on" ? true : false;
    const animal = await Animal.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    res.redirect("/animals")
});

module.exports = router;
const express = require("express");
const router = express.Router(); 


// Route - show all
router.get("/", (req,res) => {
    res.render("animals/index")
})

// Show
router.get("/:id", (req,res) => {
    res.render("animals/show")
})


module.exports = router;
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const { getAllAnimals, sendNewAnimalForm, getAnimalById, editAnimals, putAnimals, deleteAnimalById, seedAnimals, postNewAnimal } = require("../controllers/animals");

//==============ROUTES============================
//INDEX --------------------->
router.get("/", getAllAnimals);

//NEW ---------------------->
router.get("/new", sendNewAnimalForm);

//Seed ---------------------->
router.get("/seed", seedAnimals);

//SHOW   ----------------->
router.get("/:id", getAnimalById);

//CREATE - AUTHENTICATION  -------------------> 
router.post("/", postNewAnimal);

//EDIT - AUTHENTICATION
router.get("/:id/edit", editAnimals);

//UPDATE - AUTHENTICATION
router.put("/:id", putAnimals);

//DELETE - AUTHENTICATION
router.delete("/:id", deleteAnimalById);

module.exports = router;
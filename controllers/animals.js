const express = require("express");
const Animal = require("../models/animal")
const startAnimals = require("../db/animalSeedData")

//-----------PURE LOGIC FOR HANDLING THE REQUESTS----------------------

//INDEX
const getAllAnimals = async (req, res) => {
	// Animal.find() is a Promise
	// Promise is resoveld or rejected 
	const animals = await Animal.find({});
	// then run the next line of code
	// res.send(fruits);
	res.render("animals/index.ejs" , {animals});
};


// New 
const sendNewAnimalForm = (req,res) => {
    res.render("animals/new")
};


// Post
const postNewAnimal = async (req,res) => {
    req.body.extinct = req.body.extinct === "on" ? true : false;
    const animal = await Animal.create(req.body)
    res.redirect("/animals")
};

// Seed
const seedAnimals = async (req, res) => {
    await Animal.deleteMany({});
    await Animal.create(startAnimals);
    res.redirect("/animals")
};


// Show
const getAnimalById = async (req,res) => {
    const animal = await Animal.findById(req.params.id)
    res.render("animals/show", {animal})
};


// Delete
const deleteAnimalById = async(req,res) => {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    res.redirect("/animals");
};

// Edit
const editAnimals = async (req,res) => {
    const animal = await Animal.findById(req.params.id);
    res.render("animals/edit", {animal})
};


// Update
const putAnimals = async(req,res) => {
    const id = req.params.id;
    req.body.extinct = req.body.extinct === "on" ? true : false;
    const animal = await Animal.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    res.redirect("/animals")
};

module.exports = {
    getAllAnimals,
    sendNewAnimalForm,
    seedAnimals,
    getAnimalById,
    editAnimals,
    deleteAnimalById,
    putAnimals,
    postNewAnimal    
};





  
  
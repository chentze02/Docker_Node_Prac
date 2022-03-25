// var router = require("express").Router();
import tutorials from "../controllers/tutorial.controller.js";
import router from 'express';

module.exports = function myRoutes(app){
    // Create a new Tutorial
    router.Router().post("/", tutorials.create);
    // Retrieve all Tutorials
    router.Router().get("/", tutorials.findAll);
    // Retrieve all published Tutorials
    app.use('/api/tutorials', router);
};
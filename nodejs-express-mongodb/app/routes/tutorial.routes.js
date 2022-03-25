import express from 'express';
import {create, findAll} from "../controllers/tutorial.controller.js";
const router = express.Router();

const myRoutes = (app) => {
    // Create a new Tutorial
    router.post("/", create);
    // Retrieve all Tutorials
    router.get("/", findAll);
    // Retrieve all published Tutorials
    app.use('/api/tutorials', router);
};

export default myRoutes;
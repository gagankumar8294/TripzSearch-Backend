// tours.routes.js

import express from "express";
import ToursController from "./tours.controller.js";
import jwtAuth from "../middlewares/jwt.middleware.js";


const toursRouter = express.Router();
const toursController = new ToursController();

// GET all tours
toursRouter.get("/", (req, res) => toursController.getAll(req, res));

// GET single tour
toursRouter.get("/:id", (req, res) => toursController.getById(req, res));

// CREATE tour
toursRouter.post("/",   (req, res) => toursController.add(req, res));

// UPDATE tour
toursRouter.put("/:id", jwtAuth,  (req, res) => toursController.update(req, res));

// DELETE tour
toursRouter.delete("/:id", jwtAuth, (req, res) => toursController.delete(req, res));

export default toursRouter;

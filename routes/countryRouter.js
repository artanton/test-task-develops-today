import express from "express";
import countryController from "../controllers/countryControllers.js";

const nodeRouter = express.Router();

nodeRouter.get("/", countryController.getAllCountries);

nodeRouter.get("/country", countryController.getCountry);

export default nodeRouter;

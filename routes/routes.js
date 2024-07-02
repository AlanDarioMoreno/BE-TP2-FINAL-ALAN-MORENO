import { Router } from "express";
import { reqValidate } from "../midlewares/reqValidate.js";
import SondasController from "../controllers/SondasController.js";


const routes = Router();

const sondasController = new SondasController();


routes.post("/",reqValidate, sondasController.createSonda);
routes.get("/", sondasController.getAllSondas);
routes.get("/:id",reqValidate, sondasController.getSondaById);

export default routes;

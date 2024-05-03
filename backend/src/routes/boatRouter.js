import { BoatsController } from "../controller/boatController.js";
import express from "express";

export const boatRouter = express
  .Router()
  .get("/", BoatsController.getAllBoatsCtrl)
  .get("/:shipId", BoatsController.getOneBoatCtrl)
  .post("/", BoatsController.postOneBoatCtrl)
  .patch("/:shipId", BoatsController.patchOneBoatCtrl)
  .delete("/:shipId", BoatsController.deleteOneBoatCtrl);

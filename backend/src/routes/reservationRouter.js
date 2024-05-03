import { ReservationsController } from "../controller/reservationsController.js";
import express from "express";

export const reservationRouter = express
  .Router()
  .get("/", ReservationsController.getAllReservationsCtrl)
  .post("/", ReservationsController.postOneReservationCtrl)
  .patch("/:resId", ReservationsController.patchOneReservationCtrl)
  .delete("/:resId", ReservationsController.deleteOneReservationCtrl);

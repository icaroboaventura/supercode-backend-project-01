import { Reservations } from "../models/Reservations.js";
import { ReservationService } from "../service/index.js";

const getAllReservationsCtrl = async (_, res) => {
  try {
    const reservations = await ReservationService.showAllReservations();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Internal Server error", err });
  }
};

const postOneReservationCtrl = async (req, res) => {
  try {
    const reservationData = req.body;
    const newReservation = await ReservationService.addNewReservation(
      reservationData
    );
    if (newReservation) res.status(200).json(newReservation);
  } catch (err) {
    res.status(500).json({ message: "Internal Server error", err });
  }
};

const patchOneReservationCtrl = (req, res) => {
  const reservationId = req.params.resId;
  const reservationData = req.body;
  Reservations.findByIdAndUpdate(reservationId, reservationData, { new: true })
    .then((ships) => res.status(200).json(ships))
    .catch((err) =>
      res.status(500).json({ message: "Internal Server error", err })
    );
};

const deleteOneReservationCtrl = (req, res) => {
  const reservationId = req.params.resId;

  Reservations.findByIdAndDelete(reservationId)
    .then((ships) => res.status(200).json(ships))
    .catch((err) =>
      res.status(500).json({ message: "Internal Server error", err })
    );
};

export const ReservationsController = {
  getAllReservationsCtrl,
  postOneReservationCtrl,
  patchOneReservationCtrl,
  deleteOneReservationCtrl,
};

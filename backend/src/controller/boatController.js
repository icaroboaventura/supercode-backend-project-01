import { Ships } from "../models/Ships.js";
import { addNewBoat } from "../service/addNewBoat.js";
import { showAllBoats } from "../service/showAllBoats.js";
import { showOneBoat } from "../service/showOneBoat.js";

const getAllBoatsCtrl = (_, res) => {
  showAllBoats()
    .then((ships) => res.status(200).json(ships))
    .catch((err) =>
      res.status(500).json({ message: "Internal Server error", err })
    );
};
const getOneBoatCtrl = (req, res) => {
  const shipId = req.params.shipId;
  showOneBoat(shipId)
    .then((ships) => res.status(200).json(ships))
    .catch((err) =>
      res.status(500).json({ message: "Internal Server error", err })
    );
};

const postOneBoatCtrl = (req, res) => {
  const shipData = req.body;
  addNewBoat(shipData)
    .then((ships) => res.status(200).json(ships))
    .catch((err) =>
      res.status(500).json({ message: "Internal Server error", err })
    );
};

const patchOneBoatCtrl = (req, res) => {
  const shipId = req.params.shipId;
  const shipData = req.body;
  Ships.findByIdAndUpdate(shipId, shipData, { new: true })
    .then((ships) => res.status(200).json(ships))
    .catch((err) =>
      res.status(500).json({ message: "Internal Server error", err })
    );
};

const deleteOneBoatCtrl = (req, res) => {
  const shipId = req.params.shipId;
  Ships.findByIdAndDelete(shipId)
    .then((ships) => res.status(200).json(ships))
    .catch((err) =>
      res.status(500).json({ message: "Internal Server error", err })
    );
};

export const BoatsController = {
  getAllBoatsCtrl,
  getOneBoatCtrl,
  postOneBoatCtrl,
  patchOneBoatCtrl,
  deleteOneBoatCtrl,
};

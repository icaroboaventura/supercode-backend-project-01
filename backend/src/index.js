import express from "express";
import morgan from "morgan";
import cors from "cors";
import { Reservations } from "./models/Reservations.js";
import { connectToDataBase } from "./models/index.js";
import { Ships } from "./models/Ships.js";
import multer from "multer";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("data/images"));
app.use(express.json());

const upload = multer({ dest: "./data/images" });

// Pfad für den Img upload
app.post("/api/v1/upload", upload.single("shipImg"), (req, res) => {
  res.json({ fileName: req.file.filename });
});

// Alle Pfade für Schiffe

app.get("/api/v1/ships", (_, res) => {
  Ships.find({})
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

app.get("/api/v1/ships/:shipId", (req, res) => {
  const shipId = req.params.shipId;
  Ships.findById(shipId)
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

app.post("/api/v1/ships", (req, res) => {
  const shipData = req.body;
  Ships.create(shipData)
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

app.patch("/api/v1/ships/:shipId", (req, res) => {
  const shipId = req.params.shipId;
  const shipData = req.body;
  Ships.findByIdAndUpdate(shipId, shipData, { new: true })
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

app.delete("/api/v1/ships/:shipId", (req, res) => {
  const shipId = req.params.shipId;
  Ships.findByIdAndDelete(shipId)
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

// Alle Pfade für Reservierungen

app.get("/api/v1/revervations", (req, res) => {
  Reservations.find({})
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

app.post("/api/v1/reservations", (req, res) => {
  const reservationData = req.body;
  Reservations.create(reservationData)
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

app.patch("/api/v1/reservations/:resId", (req, res) => {
  const reservationId = req.params.resId;
  const reservationData = req.body;
  Reservations.findByIdAndUpdate(reservationId, reservationData, { new: true })
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

app.delete("/api/v1/reservations/:resId", (req, res) => {
  const reservationId = req.params.resId;

  Reservations.findByIdAndDelete(reservationId)
    .then((ships) => res.status(200).json(ships))
    .catch((err) => res.status(500).json({ message: "Internal Server error", err }));
});

connectToDataBase()
  .then(() => {
    const PORT = 619;
    app.listen(PORT, () => console.log("Server lisening at port:", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

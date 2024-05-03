import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDataBase } from "./models/index.js";
import multer from "multer";
import { boatRouter } from "./routes/boatRouter.js";
import { reservationRouter } from "./routes/reservationRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("data/images"));
app.use(express.json());

app.use("/api/v1/ships", boatRouter);
app.use("/api/v1/reservations", reservationRouter);

const upload = multer({ dest: "./data/images" });

// Pfad für den Img upload
app.post("/api/v1/upload", upload.single("shipImg"), (req, res) => {
  res.json({ fileName: req.file.filename });
});

// Alle Pfade für Reservierungen

connectToDataBase()
  .then(() => {
    const PORT = 619;
    app.listen(PORT, () => console.log("Server lisening at port:", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

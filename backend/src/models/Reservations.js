import mongoose from "mongoose";

//----- Resevierungsmodell

const reservationsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    seriennummer: { type: String, required: true, trim: true },
    startDatum: { type: String, required: true, trim: true },
    endDatum: { type: String, required: true, trim: true },
  },
  { collection: "reservations", timestamps: true }
);

export const Reservations = mongoose.model("Reservations", reservationsSchema);

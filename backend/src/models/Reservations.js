import mongoose from "mongoose";

//----- Resevierungsmodell

const reservationsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    seriennummer: { type: String, required: true, trim: true },
    startdatum: { type: String, required: true, trim: true },
    enddatum: { type: String, required: true, trim: true },
  },
  { collection: "reservations", timestamps: true }
);

export const Reservations = mongoose.model("Reservations", reservationsSchema);

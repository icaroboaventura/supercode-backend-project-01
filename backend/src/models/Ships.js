import mongoose from "mongoose";

// ------ Schiff Modell

const shipSchema = new mongoose.Schema(
  {
    bauJahr: { type: Number, required: true },
    serienNummer: { type: String, required: true, trim: true },
    material: [{ type: String, required: true, trim: true }],
    bootsart: { type: String, required: true, trim: true },
  },
  { collection: "ships", timestamps: true }
);

export const Ships = mongoose.model("Ships", shipSchema);

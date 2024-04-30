import mongoose from "mongoose";

// ------ Schiff Modell

const shipSchema = new mongoose.Schema(
  {
    baujahr: { type: Number, required: true },
    seriennummer: { type: String, required: true, trim: true },
    material: [{ type: String, required: true, trim: true }],
    bootsart: { type: String, required: true, trim: true },
    imgurl: { type: String, required: true, trim: true },
  },
  { collection: "ships", timestamps: true }
);

export const Ships = mongoose.model("Ships", shipSchema);

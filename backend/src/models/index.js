import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDataBase = () => {
  const dbUrl = process.env.MONGO_URL;
  return mongoose.connect(dbUrl, { dbName: "ship-rental" });
};

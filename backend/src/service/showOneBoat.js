import { Ships } from "../models/Ships.js";

export const showOneBoat = async (boatId) => {
  const foundBoat = await Ships.findById(boatId);
  if (!foundBoat) throw new Error("Boat not found");
  return foundBoat;
};

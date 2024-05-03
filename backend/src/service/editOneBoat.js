import { Ships } from "../models/Ships.js";

export const editOneBoat = async (boatId, boatInfos) => {
  const updatedBoat = await Ships.findByIdAndUpdate(boatId, boatInfos);
  if (!updatedBoat) throw new Error("The boat does not exist");
  return updatedBoat;
};

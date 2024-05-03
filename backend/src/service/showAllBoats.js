import { Ships } from "../models/Ships.js";

export const showAllBoats = async () => {
  const allBoats = await Ships.find({});
  return allBoats;
};

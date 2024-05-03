import { Ships } from "../models/Ships.js";

export const addNewBoat = async (shipInfo) => {
  const foundBoat = await Ships.findOne({
    seriennummer: shipInfo.seriennummer,
  });
  if (foundBoat) throw new Error("The boat already exists");
  const newBoat = await Ships.create(shipInfo);
  return newBoat;
};

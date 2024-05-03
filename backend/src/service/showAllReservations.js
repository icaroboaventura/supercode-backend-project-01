import { Reservations } from "../models/Reservations.js";

export const showAllReservations = async () => {
  const allReservations = await Reservations.find({});
  if (!allReservations) throw new Error("Could not find any reservation");
  return allReservations;
};

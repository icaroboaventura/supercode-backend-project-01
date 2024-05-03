import { Reservations } from "../models/Reservations.js";

export const addNewReservation = async (resInfo) => {
  const allReserverationsForBoat = await Reservations.find({
    seriennummer: resInfo.seriennummer,
  });
  if (!allReserverationsForBoat) return Reservations.create(resInfo);

  const matchingReservations = allReserverationsForBoat.find(
    (oldResInfo) =>
      (resInfo.startdatum > oldResInfo.startdatum &&
        resInfo.startdatum < oldResInfo.enddatum) ||
      (resInfo.enddatum > oldResInfo.startdatum &&
        resInfo.enddatum < oldResInfo.enddatum)
  );

  console.log(matchingReservations);

  if (matchingReservations) {
    throw new Error("Das Boot ist zu diesem Zeitraum bereits belegt");
  }

  return Reservations.create(resInfo);
};

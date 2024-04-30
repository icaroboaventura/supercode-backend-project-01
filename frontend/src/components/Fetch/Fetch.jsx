import { useContext, useEffect } from "react";
import { BooteContext } from "../../context/Context";
import { ReservierungenContext, GlobalFetchUpdateContext } from "../../context/Context";

const Fetch = () => {
  const { setBoote } = useContext(BooteContext);
  const { setReservierung } = useContext(ReservierungenContext);
  const { globalFetchUpd } = useContext(GlobalFetchUpdateContext);

  useEffect(() => {
    fetch("http://localhost:619/api/v1/ships")
      .then((res) => res.json())
      .then((data) => setBoote(data))
      .catch((error) => console.log(error));
  }, [globalFetchUpd]);
  useEffect(() => {
    fetch("http://localhost:619/api/v1/reservations")
      .then((res) => res.json())
      .then((data) => setReservierung(data))
      .catch((error) => console.log(error));
  }, [globalFetchUpd]);

  return <></>;
};

export default Fetch;

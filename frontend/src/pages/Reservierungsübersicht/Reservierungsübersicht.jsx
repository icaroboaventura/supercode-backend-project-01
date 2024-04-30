import "./Reservierungsübersicht.css";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { ReservierungenContext } from "../../context/Context";
import { GlobalFetchUpdateContext } from "../../context/Context";
import AddReservationPopUp from "../../components/AddReservationPopUp/AddReservationPopUp";

const Reservierungsübersicht = () => {
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState(false);
  const [reservationDetails, setReservationDetails] = useState([]);
  const [reservierungHinzufügen, setReservierungHinzufügen] = useState(false);
  const { reservierung } = useContext(ReservierungenContext);
  const { globalFetchUpd, setGlobalFetchUpd } = useContext(GlobalFetchUpdateContext);
  console.log(edit);
  console.log(reservierungHinzufügen);

  return (
    <>
      <>
        <header className="boote-header">
          <Navbar />
          <section className="boote-wrapper">
            {detail && <DetailPopUp bootDetails={bootDetails} setDetail={setDetail} />}
            {reservierungHinzufügen && <AddReservationPopUp bootDetails={bootDetails} setDetail={setDetail} />}
            {/* {edit && <AddReservationPopUp bootDetails={bootDetails} setDetail={setDetail} />} */}

            <div className="hero-heading-wrapper">
              <h1>Reservierungsübersicht</h1>
              <img className="underline" src="img/underline.png" alt="" />
            </div>
            <div className="boote">
              <img onClick={() => setReservierungHinzufügen((reservierungHinzufügen) => !reservierungHinzufügen)} className="add" src="/img/+.svg" alt="" />
              {reservierung.map((r, index) => (
                <div className="boot" key={index}>
                  <div
                    className="boot-link"
                    onClick={() => {
                      setDetail((detail) => !detail);
                      setReservationDetails(boot);
                    }}
                  >
                    <p>{r.name}</p>
                    <p>von: {r.startdatum}</p>
                    <p>bis: {r.enddatum}</p>
                  </div>
                  <img className="edit" style={{ cursor: "pointer" }} onClick={() => setEdit((edit) => !edit)} src="/img/edit.svg" alt="" />
                </div>
              ))}
            </div>
          </section>
        </header>
      </>
    </>
  );
};

export default Reservierungsübersicht;

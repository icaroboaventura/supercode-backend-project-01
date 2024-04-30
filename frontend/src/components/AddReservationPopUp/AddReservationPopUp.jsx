import { useState } from "react";
import "./AddReservationPopUp.css";
import { useContext } from "react";
import { GlobalFetchUpdateContext } from "../../context/Context";

const AddReservationPopUp = ({ setReservationHinzufügen }) => {
  const { globalFetchUpd, setGlobalFetchUpd } = useContext(GlobalFetchUpdateContext);
  const [addData, setAddData] = useState({
    name: "",
    email: "",
    seriennummer: "",
    startdatum: "",
    enddatum: "",
  });

  const handleAddBoot = (event) => {
    event.preventDefault();

    fetch(`http://localhost:619/api/v1/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then(() => setGlobalFetchUpd((globalFetchUpd) => !globalFetchUpd))
      .catch((err) => console.log(err));

    setReservationHinzufügen((reservierungHinzufügen) => !reservierungHinzufügen);
  };
  return (
    <section className="detail-popup">
      <article>
        <div className="detail-popup-left">
          <div className="hero-heading-wrapper heading-edit">
            <h2>Reservation hinzufügen</h2>
            <img className="underline-detail" src="/img/underline.png" alt="" />
          </div>
          <form className="edit-form">
            <input type="number" value={addData.name} min="1900" max="2099" onChange={(e) => setAddData({ ...addData, name: e.target.value })} placeholder="Name einfügen" />
            <input type="email" value={addData.email} onChange={(e) => setAddData({ ...addData, email: e.target.value })} placeholder="Email einfügen" />
            <input type="text" value={addData.seriennummer} onChange={(e) => setAddData({ ...addData, seriennummer: e.target.value })} placeholder="Seriennummer einfügen (Holz, Stahl, ..)" />
            <input type="date" value={addData.startdatum} onChange={(e) => setAddData({ ...addData, startdatum: e.target.value })} placeholder="Startdatum wählen" />
            <input type="date" value={addData.enddatum} onChange={(e) => setAddData({ ...addData, enddatum: e.target.value })} placeholder="Enddatum wählen" />
            <button onClick={handleAddBoot} className="btn">
              Speichern
            </button>
          </form>
        </div>
        <img onClick={() => setReservationHinzufügen((reservierungHinzufügen) => !reservierungHinzufügen)} className="close-button" src="/img/x.svg" alt="" />
      </article>
    </section>
  );
};

export default AddReservationPopUp;

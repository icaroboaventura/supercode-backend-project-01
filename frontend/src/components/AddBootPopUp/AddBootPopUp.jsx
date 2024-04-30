import { useState } from "react";
import "./AddBootPopUp.css";
import { useContext } from "react";
import { GlobalFetchUpdateContext } from "../../context/Context";

const AddBootPopUp = ({ setBootHinzufügen }) => {
  const { globalFetchUpd, setGlobalFetchUpd } = useContext(GlobalFetchUpdateContext);
  const [addData, setAddData] = useState({
    material: "",
    bootsart: "",
    seriennummer: "",
    baujahr: "",
    imgurl: "",
  });

  const handleAddBoot = (event) => {
    event.preventDefault();

    fetch(`http://localhost:619/api/v1/ships`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then(() => setGlobalFetchUpd((globalFetchUpd) => !globalFetchUpd))
      .catch((err) => console.log(err));

    setBootHinzufügen((bootHinzufügen) => !bootHinzufügen);
  };
  return (
    <section className="detail-popup">
      <article>
        <div className="detail-popup-left">
          <div className="hero-heading-wrapper heading-edit">
            <h2>Boot hinzufügen</h2>
            <img className="underline-detail" src="/img/underline.png" alt="" />
          </div>
          <form className="edit-form">
            <input type="number" value={addData.baujahr} min="1900" max="2099" onChange={(e) => setAddData({ ...addData, baujahr: e.target.value })} placeholder="Baujahr einfügen" />
            <input type="text" value={addData.seriennummer} onChange={(e) => setAddData({ ...addData, seriennummer: e.target.value })} placeholder="Seriennummer einfügen" />
            <input type="text" value={addData.material} onChange={(e) => setAddData({ ...addData, material: e.target.value })} placeholder="Materialen einfügen (Holz, Stahl, ..)" />
            <input type="text" value={addData.bootsart} onChange={(e) => setAddData({ ...addData, bootsart: e.target.value })} placeholder="Bootsart einfügen" />
            <input type="text" value={addData.imgurl} onChange={(e) => setAddData({ ...addData, imgurl: e.target.value })} placeholder="img url einfügen" />
            <button onClick={handleAddBoot} className="btn">
              Speichern
            </button>
          </form>
        </div>
        <img onClick={() => setBootHinzufügen((bootHinzufügen) => !bootHinzufügen)} className="close-button" src="/img/x.svg" alt="" />
      </article>
    </section>
  );
};

export default AddBootPopUp;

import { useState } from "react";
import "./EditPopUp.css";
import { useContext } from "react";
import { GlobalFetchUpdateContext } from "../../context/Context";
const EditPopUp = ({ bootDetails, setEdit }) => {
  const { globalFetchUpd, setGlobalFetchUpd } = useContext(GlobalFetchUpdateContext);
  const [editData, setEditData] = useState({
    material: bootDetails.material,
    bootsart: bootDetails.bootsart,
    seriennummer: bootDetails.seriennummer,
    baujahr: bootDetails.baujahr,
    imgurl: bootDetails.imgurl,
  });

  console.log(editData);

  const handleEditBoot = (event) => {
    event.preventDefault();

    fetch(`http://localhost:619/api/v1/ships/${bootDetails._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then(() => setGlobalFetchUpd((globalFetchUpd) => !globalFetchUpd))
      .catch((err) => console.log(err));

    setEdit((edit) => !edit);
  };

  return (
    <section className="detail-popup">
      <article>
        <div className="detail-popup-left">
          <div className="hero-heading-wrapper heading-edit">
            <h2>Bearbeiten</h2>
            <img className="underline-detail" src="/img/underline.png" alt="" />
          </div>
          <form className="edit-form">
            <input type="number" value={editData.baujahr} min="1900" max="2099" onChange={(e) => setEditData({ ...editData, baujahr: e.target.value })} placeholder="Baujahr einfügen" />
            <input type="text" value={editData.seriennummer} onChange={(e) => setEditData({ ...editData, seriennummer: e.target.value })} placeholder="Seriennummer einfügen" />
            <input type="text" value={editData.material} onChange={(e) => setEditData({ ...editData, material: e.target.value })} placeholder="Materialen einfügen (Holz, Stahl, ..)" />
            <input type="text" value={editData.bootsart} onChange={(e) => setEditData({ ...editData, bootsart: e.target.value })} placeholder="Bootsart einfügen" />
            <input type="text" value={editData.imgurl} onChange={(e) => setEditData({ ...editData, imgurl: e.target.value })} placeholder="img url einfügen" />
            <button onClick={handleEditBoot} className="btn">
              Speichern
            </button>
          </form>
        </div>
        <img onClick={() => setEdit((edit) => !edit)} className="close-button" src="/img/x.svg" alt="" />
      </article>
    </section>
  );
};

export default EditPopUp;

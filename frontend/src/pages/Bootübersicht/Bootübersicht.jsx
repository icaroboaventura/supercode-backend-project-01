import Navbar from "../../components/Navbar/Navbar";
import "./Bootübersicht.css";
import { useContext, useState } from "react";
import { BooteContext } from "../../context/Context";
import DetailPopUp from "../../components/DetailPopUp/DetailPopUp";
import EditPopUp from "../../components/EditPopUp/EditPopUp";
import AddBootPopUp from "../../components/AddBootPopUp/AddBootPopUp";

const Bootübersicht = () => {
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState(false);
  const [bootHinzufügen, setBootHinzufügen] = useState(false);

  const [bootDetails, setBootDetails] = useState([]);
  const { boote } = useContext(BooteContext);

  return (
    <>
      <>
        <header className="boote-header">
          <Navbar />
          <section className="boote-wrapper">
            {detail && (
              <DetailPopUp bootDetails={bootDetails} setDetail={setDetail} />
            )}
            {edit && <EditPopUp bootDetails={bootDetails} setEdit={setEdit} />}
            {bootHinzufügen && (
              <AddBootPopUp setBootHinzufügen={setBootHinzufügen} />
            )}
            <div className="hero-heading-wrapper">
              <h1>Bootübersicht</h1>
              <img className="underline" src="img/underline.png" alt="" />
            </div>
            <div className="boote">
              <img
                onClick={() => {
                  setBootHinzufügen((bootHinzufügen) => !bootHinzufügen);
                }}
                className="add"
                src="/img/+.svg"
                alt=""
              />
              {boote.map((boot, index) => (
                <div className="boot" key={index}>
                  <div
                    className="boot-link"
                    onClick={() => {
                      setDetail((detail) => !detail);
                      setBootDetails(boot);
                    }}
                  >
                    <p>{boot.seriennummer}</p>
                    <p>{boot.baujahr}</p>
                    <p>{boot.bootsart}</p>
                  </div>
                  <img
                    className="edit"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setEdit((edit) => !edit);
                      setBootDetails(boot);
                    }}
                    src="/img/edit.svg"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </section>
        </header>
      </>
    </>
  );
};

export default Bootübersicht;

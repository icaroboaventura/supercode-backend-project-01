import "./DetailPopUpReservations.css";

const DetailPopUpReservations = ({ reservationDetails, setDetail }) => {
  console.log(reservationDetails);
  return (
    <section className="detail-popup">
      <article>
        <div className="detail-popup-left">
          <div className="hero-heading-wrapper">
            <h2>Reservierungsdetails</h2>
            <img className="underline-detail" src="/img/underline.png" alt="" />
          </div>
          <div className="detail-content-wrapper">
            <div className="detail-eigenschaften">
              <p className="detail-bold-p">Seriennummer: </p>{" "}
              <p>{reservationDetails.seriennummer}</p>
            </div>
            <div className="detail-eigenschaften">
              <p className="detail-bold-p">Startdatum: </p>{" "}
              <p>{reservationDetails.startdatum}</p>
            </div>

            <div className="detail-eigenschaften">
              <p className="detail-bold-p">Enddatum: </p>
              <p>{reservationDetails.enddatum}</p>
            </div>
          </div>
        </div>
        <img
          onClick={() => setDetail((detail) => !detail)}
          className="close-button"
          src="/img/x.svg"
          alt=""
        />
      </article>
    </section>
  );
};

export default DetailPopUpReservations;

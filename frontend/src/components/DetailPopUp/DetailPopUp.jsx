import "./DetailPopUp.css";

const DetailPopUp = ({ bootDetails, setDetail }) => {
  return (
    <section className="detail-popup">
      <article>
        <div className="detail-popup-left">
          <div className="hero-heading-wrapper">
            <h2>Das Boot im Detail</h2>
            <img className="underline-detail" src="/img/underline.png" alt="" />
          </div>
          <div className="detail-content-wrapper">
            <div className="detail-eigenschaften">
              <p className="detail-bold-p">Baujahr: </p> <p>{bootDetails.baujahr}</p>
            </div>
            <div className="detail-eigenschaften">
              <p className="detail-bold-p">Bootsart: </p> <p>{bootDetails.bootsart}</p>
            </div>

            <div className="detail-eigenschaften">
              <p className="detail-bold-p">Seriennummer: </p>
              <p>{bootDetails.seriennummer}</p>
            </div>
            <div className="detail-eigenschaften">
              <p className="detail-bold-p">Material:</p>
              <div className="detail-wrapper">
                {bootDetails.material.map((m, index) => (
                  <p key={index}>{m}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="detail-popup-right">
          <img src={bootDetails.imgurl} alt="" />
        </div>
        <img onClick={() => setDetail((detail) => !detail)} className="close-button" src="/img/x.svg" alt="" />
      </article>
    </section>
  );
};

export default DetailPopUp;

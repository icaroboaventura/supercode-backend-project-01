import Navbar from "../../components/Navbar/Navbar";
import "./Dashboard.css";
import { useContext, useEffect } from "react";
import { BooteContext } from "../../context/Context";
import { ReservierungenContext } from "../../context/Context";
import DashboardOutput from "../../components/DashboardOutput/DashboardOutput";

const Dashboard = () => {
  const { boote } = useContext(BooteContext);
  const { reservierung } = useContext(ReservierungenContext);

  let dateNow = new Date();
  let day = dateNow.getDate();
  let month = dateNow.getMonth() + 1;
  let year = dateNow.getFullYear();

  let date = `${year}-${month <= 9 ? "0" + month : month}-${day <= 9 ? "0" + day : day}`;

  let resArray = [];

  reservierung.map((r) => {
    if (r.startdatum < date && r.enddatum > date) {
      resArray.push(r);
    }
  });

  return (
    <>
      <header className="dashboard-header">
        <Navbar />
        <section>
          <div className="hero-heading-wrapper">
            <h1>Helges Highspeed Boorsverleih</h1>
            <img src="img/underline.png" alt="" />
          </div>
          <div className="dashboard-content">
            <DashboardOutput>
              <h2>Aktuelle Reservierungen</h2>
              <p>{resArray.length}</p>
            </DashboardOutput>
            <DashboardOutput reservierungen={reservierung} boote={boote}>
              <h2>Verfügbare Boote</h2>
              <p>{boote.length - resArray.length}</p>
            </DashboardOutput>
            <DashboardOutput>
              <h2> Gesamtzahl Boote </h2>
              <p>{boote.length}</p>
            </DashboardOutput>
          </div>
        </section>
      </header>
    </>
  );
};

export default Dashboard;

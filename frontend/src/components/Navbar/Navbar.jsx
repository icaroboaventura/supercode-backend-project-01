import Fetch from "../Fetch/Fetch";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Fetch />
      <nav>
        <Link to="/">
          <img src="/img/Home.svg" />
        </Link>
        <Link to="/boote">
          <img src="/img/Ship.svg" />
        </Link>
        <Link to="/reservierungen">
          <img src="/img/Reservation.svg" />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

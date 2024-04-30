import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Bootübersicht from "./pages/Bootübersicht/Bootübersicht";
import Reservierungsübersicht from "./pages/Reservierungsübersicht/Reservierungsübersicht";
import { BooteContext, ReservierungenContext, GlobalFetchUpdateContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [boote, setBoote] = useState([]);
  const [reservierung, setReservierung] = useState([]);
  const [globalFetchUpd, setGlobalFetchUpd] = useState(false);

  return (
    <GlobalFetchUpdateContext.Provider value={{ globalFetchUpd, setGlobalFetchUpd }}>
      <BooteContext.Provider value={{ boote, setBoote }}>
        <ReservierungenContext.Provider value={{ reservierung, setReservierung }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/boote" element={<Bootübersicht />} />
              <Route path="/reservierungen" element={<Reservierungsübersicht />} />
            </Routes>
          </BrowserRouter>
        </ReservierungenContext.Provider>
      </BooteContext.Provider>
    </GlobalFetchUpdateContext.Provider>
  );
}

export default App;

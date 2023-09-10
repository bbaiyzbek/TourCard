import React from "react";
import {Route, Routes} from "react-router-dom";
import TourCard from "./components/Tour-Card/TourCard";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<TourCard/>}/>
      </Routes>
  );
}

export default App;

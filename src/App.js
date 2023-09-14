import React from "react";
import {Route, Routes} from "react-router-dom";
import FavPage from "./pages/FavPage";
import TourPage from "./pages/TourPage";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<TourPage/>}/>
        <Route path={'/favs'} element={<FavPage/>}/>
      </Routes>
  );
}

export default App;

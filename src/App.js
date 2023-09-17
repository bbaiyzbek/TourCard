import React from "react";
import {Route, Routes} from "react-router-dom";
import FavPage from "./pages/FavPage";
import TourPage from "./pages/TourPage";
import TourAuthorPage from "./pages/TourAuthorPage";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<TourPage/>}/>
        <Route path={'/favs'} element={<FavPage/>}/>
        <Route path={'/tour-author'} element={<TourAuthorPage/>}/>

      </Routes>
  );
}

export default App;

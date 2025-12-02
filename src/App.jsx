import React from "react";
import {HashRouter, Route, Routes} from 'react-router-dom';

import "./App.css";
import JapanTripGuidePages from "./components/JapanTripGuidePages.jsx";
import UpdateJapanTripPrices from "./components/UpdateJapanTripPrices.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/japan-trip-guide' element={<JapanTripGuidePages />} />
        <Route exact path='/update-japan-trip-prices' element={<UpdateJapanTripPrices />} />
      </Routes>
    </HashRouter>
  )
}

export default App;

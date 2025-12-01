import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import "./App.css";
import JapanTripGuidePages from "./components/JapanTripGuidePages.jsx";
import UpdateJapanTripPrices from "./components/UpdateJapanTripPrices.jsx";

function App() {
  return (
    <BrowserRouter basename="/JapanTripGuide">
      <Routes>
        <Route exact path='/japan-trip-guide' element={<JapanTripGuidePages />} />
        <Route exact path='/update-japan-trip-prices' element={<UpdateJapanTripPrices />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

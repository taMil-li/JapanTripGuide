import React from "react";
import {HashRouter, Route, Routes} from 'react-router-dom';

import "./App.css";
import JapanTripGuidePages from "./components/JapanTripGuidePages.jsx";
import UpdateJapanTripPrices from "./components/UpdateJapanTripPrices.jsx";
import VietnamTripGuidePages from "./components/VietnamTripGuide/VietnamTripGuidePages.jsx";
import UpdateVietnamTripPrices from "./components/VietnamTripGuide/UpdateVietnamTripPrices.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/japan-trip-guide' element={<JapanTripGuidePages />} />
        <Route exact path='/update-japan-trip-prices' element={<UpdateJapanTripPrices />} />
        <Route exact path='/vietnam-trip-guide' element={<VietnamTripGuidePages />} />
        <Route exact path='/update-vietnam-trip-prices' element={<UpdateVietnamTripPrices />} />
      </Routes>
    </HashRouter>
  )
}

export default App;

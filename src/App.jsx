import React, { Suspense, lazy } from "react";

const Page1 = lazy(() => import("./components/Page1.jsx"));
const Page2 = lazy(() => import("./components/Page2.jsx"));
const Page3 = lazy(() => import("./components/Page3.jsx"));
const Page4 = lazy(() => import("./components/Page4.jsx"));
const Page5 = lazy(() => import("./components/Page5.jsx"));
const Page6 = lazy(() => import("./components/Page6.jsx"));
const Page7 = lazy(() => import("./components/Page7.jsx"));
const Page8 = lazy(() => import("./components/Page8.jsx"));
const Page9 = lazy(() => import("./components/Page9.jsx"));
const Page10 = lazy(() => import("./components/Page10.jsx"));
const Page12 = lazy(() => import("./components/Page12.jsx"));

import "./App.css";

function App() {
  return (
    <>
      <Page1 />
      <Suspense fallback={<div className="loading"></div>}>
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        {/* <Page11 /> Page Neglected */}
        <Page12 />
      </Suspense>
    </>
  );
}

export default App;

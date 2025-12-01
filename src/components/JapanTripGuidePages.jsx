import React, { Suspense, lazy } from "react";

const Page1 = lazy(() => import("./Page1.jsx"));
const Page2 = lazy(() => import("./Page2.jsx"));
const Page3 = lazy(() => import("./Page3.jsx"));
const Page4 = lazy(() => import("./Page4.jsx"));
const Page5 = lazy(() => import("./Page5.jsx"));
const Page6 = lazy(() => import("./Page6.jsx"));
const Page7 = lazy(() => import("./Page7.jsx"));
const Page8 = lazy(() => import("./Page8.jsx"));
const Page9 = lazy(() => import("./Page9.jsx"));
const Page10 = lazy(() => import("./Page10.jsx"));
const Page11 = lazy(() => import("./Page11.jsx"));
const Page12 = lazy(() => import("./Page12.jsx"));

import "../styles/JapanTripGuidePages.css";

function JapanTripGuidePages() {
  const [expenses, setExpenses] = React.useState({});

  React.useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const resp = await fetch("http://localhost:5000/get-expenses");
      if (resp.ok) {      
        const data = await resp.json();
        setExpenses(data.data[0]);
      }

    } catch (error) {
      console.error("Error fetching expenses: ", error.message);
    }
  };
  
  return (
    <Suspense fallback={<div className="loading"></div>}>
      <div className="japan-trip-guide-pages">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 expenses={expenses} />
        <Page5 expenses={expenses} />
        <Page6 expenses={expenses} />
        <Page7 expenses={expenses} />
        <Page8 expenses={expenses} />
        <Page9 expenses={expenses} />
        <Page10 expenses={expenses} />
        <Page11 />
        <Page12 />
      </div>
    </Suspense>
  );
}

export default JapanTripGuidePages;

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
const Page11 = lazy(() => import("./components/Page11.jsx"));
const Page12 = lazy(() => import("./components/Page12.jsx"));

import "./App.css";

function App() {
  const [expenses, setExpenses] = React.useState({});

  React.useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const resp = await fetch("https://japantripguidebackend.onrender.com/get-expenses");
      if (resp.ok) {
        const data = await resp.json();
        setExpenses(data.data[0]);
      }

    } catch (error) {
      console.error("Error fetching expenses: ", error.message);
    }
  };
  
  return (
    <>
      <Page1 />
      <Suspense fallback={<div className="loading"></div>}>
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
      </Suspense>
    </>
  );
}

export default App;

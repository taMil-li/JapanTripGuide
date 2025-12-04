import React, {Suspense, lazy} from "react"

const Page1 = lazy(() => import("./Page1.jsx"));
const Page2 = lazy(() => import("./Page2.jsx"));
const Page3 = lazy(() => import('./Page3.jsx'));
const Page4 = lazy(() => import('./Page4.jsx'));
const Page5 = lazy(() => import('./Page5.jsx'));
const Page6 = lazy(() => import('./Page6.jsx'));


import '../../styles/vietnam-guide-styles/VietnamTripGuidePages.css'

const VietnamTripGuidePages = () => {
    const [expenses, setExpenses] = React.useState({})

    const fetchExpenses = async () => {
        try {
            const resp = await fetch('https://japantripguidebackend.onrender.com/get-vietnam-expenses')
            const data = await resp.json();
            if(resp.ok) {
                setExpenses(data.data[0])
            } 
            
        } catch(error) {
            console.error("Error fetching expenses: ", error.message);
        }
    }

    React.useEffect(() => {
        fetchExpenses()
        console.log("ok done")
    }, [])

    return (
        <Suspense fallback={<div className="loading"></div>}>
            <div className="vietnam-trip-guide-pages">
                <Page1 />
                <Page2 />
                <Page3 expenses={expenses} />
                <Page4 expenses={expenses} />
                <Page5 expenses={expenses} />
                <Page6 expenses={expenses} />
            </div>
        </Suspense>
    )
}

export default VietnamTripGuidePages
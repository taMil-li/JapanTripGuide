import vittaemoneyLogo from "../assets/vittaemoneylogo.avif";
import "../styles/Page2.css";

function Page2() {
  return (
    <div className="page-2 page">
      <div className="left-part d-flex flex-column">
        <div className="top-part">
          <h3 className="table-of-content">TABLE OF CONTENT</h3>
          <hr className="line" />
          <ol className="table-of-content-list">
            <li className="sub-head">Introduction</li>
            <ul type="none" className="sub-list">
              <li>1.1 Introduction to this guide</li>
              <li>1.2 How We Research</li>
            </ul>
            <li className="sub-head">Expense Breakdown:</li>
            <ul type="none" className="sub-list">
              <li>2.1 Accommodation</li>
              <li>2.2 Dining</li>
              <li>2.3 Local transport</li>
              <li>2.4 Attractions</li>
              <li>2.5 Miscellaneous</li>
              <li>2.6 Flights</li>
              <li>2.7 Visa + SIM + Insurance</li>
            </ul>
            <li className="sub-head">Strategic Summary</li>
            <ul type="none" className="sub-list">
              <li>3.1 Recap</li>
            </ul>
          </ol>
        </div>
        <div className="logo-part d-flex flex-column align-items-center justify-content-center">
          <img src={vittaemoneyLogo} loading="lazy" alt="Vittae Money Logo" />
        </div>
      </div>
    </div>
  );
}

export default Page2;

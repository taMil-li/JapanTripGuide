import vittaemoneyLogo from "../assets/vittaemoneylogo.png";
import "../styles/Page1.css"

function Page1() {
  return (
    <div className="page-1 page d-flex">
      <div className="left-part d-flex flex-column">
        <div className="top-part d-flex">
          <div className="content d-flex flex-column">
            <div className="logo-part d-flex flex-column align-items-center justify-content-center">
              <img src={vittaemoneyLogo} alt="Vittae Money Logo" />
            </div>
            <div className="content-part">
              <h3 className="head">EXPENDITURE <br /> GUIDE FOR <br /> TRAVEL</h3>
              <hr className="line" />
              <p className="intro-text">
                Welcome to a world of confident travel. As a valued client of
                Vittae Money, we are delighted to present this exclusive trip
                planner-your definitive financial resource for navigating Japan.
              </p>
            </div>
          </div> 
          <div className="country d-flex flex-column align-items-center">
            <span>J</span>
            <span>A</span>
            <span>P</span>
            <span>A</span>
            <span>N</span>
            <span className="dot">⚪</span>
          </div>
        </div>
        <div className="bottom-part">
            <p className="head">
                Japan
            </p>
            <hr className="line" />
            <h3>VITTAE MONEY EXCLUSIVE</h3>
        </div>
      </div>
      <div className="right-part">.</div>
    </div>
  );
}

export default Page1;

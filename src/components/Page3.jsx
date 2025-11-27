import "../styles/Page3.css";
import vittaemoneyLogo from "../assets/vittaemoneylogo.avif";

function Page3() {
  return (
    <div className="page-3 page d-flex">
      <div className="left-part">.</div>
      <div className="right-part d-flex flex-column">
        <div className="top-part">
          <section className="content-1-1">
            <h2 className="head1">1.1 INTRODUCTION</h2>
            <hr className="line" /> <br />
            <h4>
              WELCOME TO VITTAE MONEY
              <br />
              EXCLUSIVE JAPAN TRIP GUIDE:
            </h4>
            <br />
            <p className="para">
              At Vittae Money, we believe true wealth is about allocation, not
              just accumulation. This guide is not a standard travel itinerary;
              it is a financial blueprint for our beloved customers. We have
              deconstructed the cost of luxury in Japan to help you navigate the
              world's most sophisticated economy with the financial savvy of a
              local insider
            </p>
          </section>
          <section className="content-1-2">
            <h2 className="head2">
              1.2 HOW WE RESEARCH: THЕ
              <br />
              VITTAE MONEY ADVANTAGE
            </h2>
            <hr className="line" />
            <p className="para">
              Here is how our research maximizes your wealth:
              <br />
              <br />
              Vittae Money believes that Financial Wellness is best achieved
              when you optimise every layer of your personal finance - starting
              from Income, Expense, Investment and Loans.
              <br />
              <br />
              This guide should help you stay informed of the expenses that you
              might need to plan for while travelling to this beautiful place.
            </p>
          </section>
        </div>
        <div className="bottom-part">
          <div className="logo-part d-flex flex-column align-items-center justify-content-center">
            <img src={vittaemoneyLogo} loading="lazy" alt="Vittae Money Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3;

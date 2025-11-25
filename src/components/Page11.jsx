import "../styles/Page11.css";
import vittaemoneyLogo from "../assets/vittaemoneylogo.png"

function Page11() {
  return (
    <div className="page-11 page">
      <div className="fourth d-flex justify-content-center">
        <div className="third d-flex justify-content-center">
          <div className="second d-flex justify-content-center">
            <div className="first">
              <fieldset className="fieldset">
                <h2 className="head">STRATEGY SUMMARY</h2>
                <hr className="line" />
                <p className="text-left para">3.1 RECAP</p>
                <h5 className="sub-head">ACCOMODATION</h5>
                <p className="para">
                  Book via Amex Platinum Concierge, Hyatt Privé, or Marriott
                  STARS for free upgrades and breakfast.
                  <br /> <br /> Stay at MIMARU(5 star hotel) for spacious
                  apartment-style suites.
                </p>
                <br />
                <h5 className="sub-head">DINING</h5>
                <p className="para">
                  Try Shojin Ryori for vegetarian/vegan Michelin-quality meals.
                  <br /> <br />
                  Lunch at Michelin-starred restaurants (Ginza Kojyu, Sushi
                  Saito, Narisawa) costs 50-70% less than dinner with same food.
                </p>
                <br />
                <h5 className="sub-head">SERVICES & TRANSPORT</h5>
                <p className="para">
                  Use Yamato Transport to ship luggage overnight (~680 per bag)
                  for travelling hands-free on Shinkansen Green Car.
                  <br /> <br /> Buy JR Pass for unlimited national train travel.
                  <br /> <br /> Book tickets via Klook or Rakuten Travel to
                  avoid OTP issues.
                  <br /> <br /> Transfer credit card points to airlines for ANA
                  flights.
                  <br /> <br /> If you only stay in one city, a local IC card
                  (like Suica/Pasmo) would be much cheaper (approx. ₹7,000 -
                  ₹10,000).
                  <br /> <br /> Withdraw Yen at 7-Eleven ATMs for Better Forex.
                  Show Indian passport at stores like Isetan/Daimaru for 5%
                  discount.
                  <br /> <br /> Purchases over ¥5,500 get 10% instant tax refund
                  (~15% total savings).
                  <br /> <br /> Keep receipts to claim Indian duty-free
                  allowances.
                </p>
              </fieldset>

              <div className="logo-part d-flex flex-column align-items-center justify-content-center">
                <img src={vittaemoneyLogo} alt="Vittae Money Logo" />
                <p className="logo-name">VITTAE</p>
                <small className="caption">Your Money Story</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page11;

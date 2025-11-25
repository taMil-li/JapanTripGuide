import "../styles/Page11.css";
import "../styles/Page12.css";
import vittaemoneyLogo from "../assets/vittaemoneylogo.png";

function Page12() {
  return (
    <div className="page-12 page-11 page">
      <div className="fourth d-flex justify-content-center">
        <div className="third d-flex justify-content-center">
          <div className="second d-flex justify-content-center">
            <div className="first">
              <fieldset className="fieldset d-flex flex-column">
                <div className="header">
                  <h2 className="head">CONCLUSION</h2>
                  <hr className="line" />
                </div>
                <br/><br/>
                <p className="para">
                    
                  Japan is one of the world's most rewarding destinations when
                  you combine smart planning with the right financial
                  strategies. From luxurious stays and gourmet dining to
                  efficient transport and seamless payments, every part of your
                  trip becomes smoother-and far more cost-effective &
                  comfort-when you use the right tools. By choosing value-rich
                  accommodations, optimizing dining with Michelin lunch hacks,
                  using luggage-forwarding for stress-free travel, relying on
                  zero-markup forex cards, and leveraging Klook/Rakuten for all
                  bookings, you unlock a premium Japan experience at a fraction
                  of the usual cost. With careful preparation and smart
                  spending, Vittae Money ensures your Japan trip feels
                  first-class.
                </p>
                <br />
                <div className="logo-part d-flex flex-column align-items-center justify-content-center">
                  <img src={vittaemoneyLogo} alt="Vittae Money Logo" />
                  <p className="logo-name">VITTAE</p>
                  <small className="caption">Your Money Story</small>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page12;

import "../styles/Page4.css";

function Page9({expenses}) {
  const {flights} = expenses;
  const economic = flights?.economic ?? {};
  const business = flights?.business ?? {};
  const firstClass = flights?.firstClass ?? {};

  return (
    <div className="page-4 page-9 page d-flex">
      <div className="left-part d-flex flex-column justify-content-center">
        <section className="accomodation">
          <h2 className="head1">Flights</h2>
          <hr className="line" />
          <p className="para">
            Flights between India and Japan are available via direct and
            one-stop routes. Book early in peak seasons (March-April,
            October-November) to get better fares. Keep hotel confirmations,
            return tickets, and itinerary handy for smooth immigration.
          </p>
          <br />
          <br />
          <h4 className="head2">FLIGHTS (ROUND TRIP)</h4>
          <p className="para">
            Economic: ₹{economic?.from ?? "0"} - ₹{economic?.to ?? '0'} <br />
            <br /> Business :₹{business?.from ?? "0"} ₹{business?.to ?? "0"} <br />
            <br />
            First Class: ₹{firstClass?.from ?? '0'} - ₹{firstClass?.to ?? '0'}+ (Family Apts))
          </p>
        </section>
        <br />
        <section className="finance-strategy">
          <fieldset className="fieldset">
            <div className="head3-container">
              <h3 className="head3">Smart Finance Strategy</h3>
            </div>
            <p className="para">
              Use your Indian credit card points instead of paying cash.
            </p>
            <p className="para">
              HDFC Infinia / Diners Black: Transfer points to Singapore Airlines
              KrisFlyer or United MileagePlus to book ANA flights.
            </p>
            <p className="para">
              Axis Atlas / Magnus: Transfer points to JAL or Virgin Atlantic to
              book ANA First Class.
            </p>
          </fieldset>
        </section>
      </div>
      <div className="second">.</div>
      <div className="third">.</div>
      <div className="fourth">.</div>
    </div>
  );
}

export default Page9;

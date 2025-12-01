import "../styles/Page4.css";

function Page6({expenses}) {
  const transport = expenses?.transport ?? {};
  const publicTransport = transport?.public ?? {};
  const privateTransport = transport?.private ?? {};
  const localICCard = transport?.localICCard ?? {};

  return (
    <div className="page-4 page-6 page d-flex">
      <div className="left-part d-flex flex-column justify-content-center">
        <section className="accomodation">
          <h2 className="head1">Local Transport</h2>
          <hr className="line" />
          <p className="para">
            EFFICIENCY: Japan's metros, buses, private rail lines, and
            Shinkansen offer seamless travel.
            <br />
            IC CARDS: Suica or PASMO enable easy city travel. Shinkansen:
            Reserved seats ensure comfort for long journeys; large luggage may
            need advance reservation.
            <br />
            TAXIS: Reliable and safe but relatively expensive.
          </p>
          <br />
          <br />
          <h4 className="head2">LOCAL TRANSPORT (7 NIGHTS)</h4>
          <p className="para">
            Public Transport: ~₹{publicTransport?.from ?? "0"} - ₹{publicTransport?.to ?? "0"} (Shinkansen/bullet trains with
            7-Day Japan Rail Pass) <br />
            <br />
            Private Transport:~₹{privateTransport?.from ?? "0"} - ₹{privateTransport?.to ?? "0"}+ (Bullet Trains + Frequent
            Taxis) <br />
            <br /> If you only stay in one city, a local IC card (like
            Suica/Pasmo) would be much cheaper (approx. ₹{localICCard?.from ?? "0"} ₹{localICCard?.to ?? "0"}).
          </p>
        </section>
        <br />
        <section className="finance-strategy">
          <fieldset className="fieldset">
            <div className="head3-container">
              <h3 className="head3">Smart Finance Strategy</h3>
            </div>
            <p className="para">
              For all travellers, Yamato Transport (Kuroneko) offers
              luggage-forwarding between hotels for about *680 per bag, allowing
              hands-free travel on the Shinkansen (Green Car), maintaining
              comfort, and saving up to 70% compared to hiring a private van
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

export default Page6;

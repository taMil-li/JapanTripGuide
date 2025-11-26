import "../styles/Page4.css";

function Page5() {
  return (
    <div className="page-4 page-5 page d-flex">
      <div className="left-part d-flex flex-column justify-content-center">
        <section className="accomodation">
          <h2 className="head1">Dining</h2>
          <hr className="line" />
          <p className="para">
            Japan's dining offers everything from fancy Michelin star meals to
            casual ramen and sushi. Popular spots in Tokyo and Kyoto often need
            reservations and may have strict cancellation rules. Many places
            accept digital payments, but small restaurants usually prefer cash.
            Some may charge a cover fee. If you have dietary needs, tell the
            staff in advance.
          </p>
          <br />
          <br />
          <h4 className="head2">Dining (7 Nights)</h4>
          <p className="para">
            3 Star restaurants: ~₹17,500 - ₹31,500 (Local and casual dining){" "}
            <br />
            <br /> 4-star Hotels: ~₹56,000 - ₹105,000 (Candeo, Hotel Niwa, Hotel
            Mariners' Court Tokyo) <br />
            <br /> 5-star Hotels: ~140,000 - 350,000+ (Dai-ichi Hotel,
            Millennium Mitsui Garden Hotel, Mimaru (Family Apts))
          </p>
        </section>
        <br />
        <section className="finance-strategy">
          <fieldset className="fieldset">
            <div className="head3-container">
              <h3 className="head3">Smart Finance Strategy</h3>
            </div>
            <h4 className="sub-head-1">CHALLENGE</h4>
            <p className="para">
              Strict vegetarian food is hard to find in Japan.
            </p>
            <h4 className="sub-head-2">STRAEGY:</h4>
            <p className="para">
              Book Shojin Ryori (Zen Buddhist cuisine) - fully vegetarian/vegan,
              Michelin-quality, no fish stock (dashi).
            </p>
            <h4 className="sub-head-3">COST SAVING TIP:</h4>
            <p className="para">
              Many Michelin-starred restaurants (e.g., Ginza Kojyu, Sushi Saito,
              Narisawa) offer lunch menus with dinnerquality food at 50-70%
              lower cost.
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

export default Page5;

import "../styles/Page4.css";

function Page5({expenses}) {
  const restaurant = expenses?.restaurant ?? {};
  const star3 = restaurant?._3Star ?? {};
  const star4 = restaurant?._4Star ?? {};
  const star5 = restaurant?._5Star ?? {};

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
            3 Star restaurants: ~₹{star3?.from ?? "0"} - ₹{star3?.to ?? "0"} (Local and casual dining){" "}
            <br />
            <br /> 4 Star restaurants: ~₹{star4?.from ?? '0'} - ₹{star4?.to ?? "0"}
(Sit-down restaurants, sushi/yakitori and Occasional
hotel dining) <br />
            <br /> 5 Star restaurants: ~₹{star5?.from ?? '0'} -₹{star5?.to ?? '0'}+
(Fine dining, Kaiseki meals, hotel buffets and
upper-end sushi/Wagyu steak houses)
          </p>
        </section>
        <br />
        <section className="finance-strategy">
          <fieldset className="fieldset">
            <div className="head3-container">
              <h3 className="head3">Smart Finance Strategy</h3>
            </div>
            <h4 className="sub-head">CHALLENGE</h4>
            <p className="para">
              Strict vegetarian food is hard to find in Japan.
            </p>
            <h4 className="sub-head">STRAEGY:</h4>
            <p className="para">
              Book Shojin Ryori (Zen Buddhist cuisine) - fully vegetarian/vegan,
              Michelin-quality, no fish stock (dashi).
            </p>
            <h4 className="sub-head">COST SAVING TIP:</h4>
            <p className="para">
              Many Michelin-starred restaurants (e.g., Ginza Kojyu, Sushi Saito,
              Narisawa) offer lunch menus with dinner quality food at 50-70%
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

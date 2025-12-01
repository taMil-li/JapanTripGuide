import "../styles/Page4.css";

function Page4(props) {
  const {expenses} = props;
  const hotelPrice = expenses?.hotelPrice ?? {};
  const _3Star = hotelPrice?._3Star ?? {};
  const _4Star = hotelPrice?._4Star ?? {};
  const _5Star = hotelPrice?._5Star ?? {};

  return (
    <div className="page-4 page d-flex">
      <div className="left-part d-flex flex-column justify-content-center">
        <section className="accomodation">
          <h2 className="head1">Accomodation</h2>
          <hr className="line" />
          <p className="para">
            Japan offers a diverse range of accommodations, from familiar
            Western-style and luxury hotels to unique local options. Travelers
            can choose the raditional Ryokan (Japanese inns, often including
            dinner and breakfast) for a cultural experience, practical and
            compact Business Hotels (common in cities), or the ultra-minimalist
            Capsule Hotels for a budget stay.
          </p>
          <br />
          <br />
          <h4 className="head2">ACCOMMODATION (7 Nights)</h4>
          <p className="para">
            3-star Hotels: ~₹{_3Star?.from ?? "0"} - ₹{_3Star?.to ?? "0"} (Pearl Hotel Kayabachō Tokyo,
            Toyoko Inn) <br />
            <br /> 4-star Hotels: ~₹{_4Star?.from ?? "0"} - ₹{_4Star?.to ?? "0"} (Candeo, Hotel Niwa, Hotel
            Mariners' Court Tokyo) <br />
            <br /> 5-star Hotels: ~{_5Star?.from ?? "0"} - {_5Star?.to ?? "0"}+ (Dai-ichi Hotel,
            Millennium Mitsui Garden Hotel, Mimaru (Family Apts))
          </p>
        </section>
        <br />
        <section className="finance-strategy">
          <fieldset className="fieldset">
            <div className="head3-container">
              <h3 className="head3">Smart Finance Strategy</h3>
            </div>
            <h4 className="sub-head">STRAEGY 1:</h4>
            <p className="para">
              Use Amex Platinum India Concierge or programs like Hyatt Privé /
              Marriott STARS. Benefits include free room upgrades and
              complimentary daily breakfast.
            </p>
            <h4 className="sub-head">STRAEGY 2:</h4>
            <p className="para">
              MIMARU hotels are ideal. Offer spacious apartment-style suites
              with kitchens, unlike typical small Japanese hotel rooms.
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

export default Page4;

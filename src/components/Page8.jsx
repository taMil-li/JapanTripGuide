import "../styles/Page4.css";

function Page8({expenses}) {
  const {miscellaneous} = expenses;

  return (
    <div className="page-4 page-8 page d-flex">
      <div className="left-part d-flex flex-column justify-content-center">
        <section className="accomodation">
          <h2 className="head1">Miscellaneous</h2>
          <hr className="line" />
          <p className="para">
            While Japan has strong digital payments, many smaller shops and
            local eateries still prefer cash, making it useful to carry
            sufficient yen. Public etiquette is taken seriously-maintaining low
            noise in trains, queueing politely, and keeping public areas clean
            are expected. Some restaurants also have cover charges, and high-end
            dining spots may require reservations well in advance, particularly
            in major cities.
          </p>
          <br />
          <br />
          <h4 className="head2">MISCELLANEOUS (SHOPPING/TIPS)</h4>
          <p className="para">
            Miscellaneous :~₹{miscellaneous?.from ?? "0"} - ₹{miscellaneous?.to}+ This is highly variable. The
            lower end is for snacks and small souvenirs; the higher end includes
            clothing, electronics, anime/manga goods, or high-value gifts. This
            is a placeholder and should be adjusted to your shopping habits.
          </p>
        </section>
        <br />
        <section className="finance-strategy">
          <fieldset className="fieldset">
            <div className="head3-container">
              <h3 className="head3">Smart Finance Strategy</h3>
            </div>
            <p className="para">
              Guest Card: At stores like Isetan or Daimaru, show your Indian
              passport at the service desk before shopping to get a 5% Guest
              Card.
            </p>
            <p className="para">
              Tax Refund: Japan offers an instant 10% cash refund at the store
              for purchases over ¥5,500 (approx ₹3,000).
            </p>
            <p className="para">
              Total Savings: ~15% off instantly. Note: Keep receipts handy for
              Indian customs duty-free allowances
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

export default Page8;

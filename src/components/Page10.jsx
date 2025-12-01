import "../styles/Page4.css";

function Page10({expenses}) {
  const {visa, simOrPocketWifi, travelInsurance} = expenses;

  return (
    <div className="page-4 page-10 page d-flex">
      <div className="left-part d-flex flex-column justify-content-center">
        <section className="accomodation">
          <h2 className="head1">Visa + SIM + Forex</h2>
          <hr className="line" />
          <p className="para">
            Japan's SIM and forex setup is straightforward but needs some
            preparation. Buy high-speed eSIMs (like Mobal or Sakura Mobile)
            online before arrival. Use low-fee international cards and keep some
            cash yen for small shops. Visa approvals are smooth with complete
            documents. Tip: activate your eSIM before landing and have a backup
            payment method.
          </p>
          <br />
          <br />
          <p className="para">
            Visa (Single-Entry Tourist): {visa?.from ?? '0'}- ₹{visa?.to ?? '0'} (The visa fee itself is
            low (approx. ₹500), but agents/VFS services add processing fees,
            bringing the common cost up)
            <br />
            <br /> SIM/Pocket Wi-Fi (7 Days): {simOrPocketWifi?.from ?? '0'} -₹{simOrPocketWifi?.to ?? '0'} Travel Insurance (7
            Days): ₹{travelInsurance?.from ?? '0'} - ₹{travelInsurance?.to ?? '0'}
            <br />
            <br />
          </p>
        </section>
        <br />
        <section className="finance-strategy">
          <fieldset className="fieldset">
            <div className="head3-container">
              <h3 className="head3">Smart Finance Strategy</h3>
            </div>
            <p className="para">
              Avoid: Standard HDFC/ICICI credit cards (3.5% markup + 18% GST on
              markup).
            </p>
            <p className="para">
              Use: Niyo Global, BookMyForex, or Scapia Federal credit cards for
              Zero Forex Markup.
            </p>
            <p className="para">
              Cash Access: Use these cards at 7-Eleven ATMs to withdraw Yen.
              They have the highest success rate with Indian cards and offer
              fair exchange rates.
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

export default Page10;

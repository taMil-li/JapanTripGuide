import "../../styles/vietnam-guide-styles/Page1.css";
import React from 'react'
import vittaemoneyLogo from "../../assets/vittaemoneylogo2.avif";

const Page1 = () => {
  function autoFitText(el) {
    const parent = el.parentElement;
    let fontSize = 150;

    el.style.fontSize = fontSize + "px";

    while (el.scrollWidth > parent.clientWidth && fontSize > 5) {
      fontSize--;
      el.style.fontSize = fontSize + "px";
    }
  }


  return (
    <div className="vtgp-page-1 vtgp-page d-flex flex-column">
      <section className="vtgp-top-part d-flex flex-column">
        <img
          src={vittaemoneyLogo}
          className="vtgp-logo"
          style={{ alignSelf: "flex-start" }}
          alt="logo"
        />
        <div className="vtgp-top-page-content d-flex flex-column">
          <p className="vtgp--1" style={{ alignSelf: "flex-start" }}>
            Vittae Money's
          </p>
          <h1 className="vtgp--2">VIETNAM</h1>
        </div>
      </section>
      <section className="vtgp-bottom-part d-flex flex-column">
        <div className="vtgp--3">
          <h2 className="vtgp-3-text">
            Financial Travel <br /> Guide
          </h2>
        </div>
        <div className="vtgp-bottom-page-content-part-2">
          <h5 className="vtgp--5">Vietnam Trip Guide</h5>
          <hr className="vtgp-line" />
          <p>
            Travel Vietnam with confidence. As  a valued vittae money client, this
            financial trip guide gives you the essential tools to budget
            smart, control costs, and enjoy a financially seamless journey.
          </p>
        </div>
        <div className="vtgp-bottom-page-content-part-3">
          <p className="vtgp-bottom-text">VIETNAM</p>
          <p className="vtgp-bottom-text">VITTAE MONEY EXCLUSIVE</p>
        </div>
      </section>
    </div>
  );
};

export default Page1;

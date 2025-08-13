import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4 className="mt-5">Support Portal</h4>
        <a href="" className="mt-5">
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <imput placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" style={{ marginLeft: "6px" }}>
            Track account opening
          </a>
          <a href="" style={{ marginLeft: "6px" }}>
            Track segment activation
          </a>
          <a href="" style={{ marginLeft: "6px" }}>
            Intraday margins
          </a>
          <a href="" style={{ marginLeft: "6px" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Surveillance measure on scrips - September 2024</a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in September 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

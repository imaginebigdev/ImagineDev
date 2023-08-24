import Link from "next/link";
import plans from "@data/IT/plans.json";
import React, { useState } from "react";

const Plan = () => {
  const togglePlanDuration = (duration) => {
    let monthly = document.querySelectorAll(".monthly_price");
    let yearly = document.querySelectorAll(".yearly_price");

    if (duration === "monthly") {
      monthly.forEach((price) => price.classList.add("show"));
      yearly.forEach((price) => price.classList.remove("show"));
    } else {
      yearly.forEach((price) => price.classList.add("show"));
      monthly.forEach((price) => price.classList.remove("show"));
    }
  };

  const [showMore, setShowMore] = useState({}); // Use an object to track showMore for each card

  const handleShowMore = (index) => {
    setShowMore((prevShowMore) => ({ ...prevShowMore, [index]: true }));
  };

  const handleShowLess = (index) => {
    setShowMore((prevShowMore) => ({ ...prevShowMore, [index]: false }));
  };

  return (
    <section
      className="pricing style-2 border-top brd-light section-padding"
      data-scroll-index="6"
    >
      <div className="container">
        <div className="section-head mb-30 text-center">
          <h3 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">
            3 Premium Digital Communication Plans
          </h3>
          <h4 style={{ color: "white" }}>
            "Communication is a fundamental element for companies to grow. If
            you don't communicate, you don't exist."
          </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content">
              <div className="toggle_switch d-flex align-items-center justify-content-center mb-20"></div>
              <div className="row justify-content-center gx-0" id="pricing">
                {plans.map((plan, index) => (
                  <div
                    className="col-lg-4 d-flex align-items-center"
                    key={index}
                  >
                    <div
                      className={`pricing_card ${
                        plan.recommended ? "recommended" : ""
                      } style-2`}
                      style={{ transition: "transform 0.3s" }} // Add transition to transform property
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(0.70)"; // Scale down the card
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)"; // Reset to original size
                      }}
                    >
                      {plan.recommended && (
                        <span className="hint">Recommended</span>
                      )}
                      <div className="icon">
                        <img src={plan.image} alt="" />
                      </div>
                      <p>{plan.title}</p>
                      {/* <div className="price mb-30">
                        <div className="monthly_price">
                          <span className="h2">
                            <small>$</small> {plan.price}
                          </span>
                          <small className="op-7 ms-1"> / month </small>
                        </div>
                        <div className="yearly_price show">
                          <span className="h2">
                            <small>$</small> {plan.price}
                          </span>
                          <small className="op-7 ms-1"> / year </small>
                        </div>
                      </div> */}

                      <ul>
                        {plan.features.slice(0, 6).map((feature, i) => (
                          <li
                            className="border-top py-3 op-8 fw-light text-uppercase"
                            key={i}
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {plan.features.length > 6 && (
                        <div>
                          {showMore[index] ? (
                            <ul>
                              {plan.features.slice(6).map((feature, i) => (
                                <li
                                  className="border-top py-3 op-8 fw-light text-uppercase"
                                  key={i}
                                >
                                  {feature}
                                </li>
                              ))}
                              <button
                                className="sm-butn btn border text-white radius-9 mt-50 w-100 hover-lightBlue border-lightBlue"
                                style={{
                                  fontSize: "13px",
                                }}
                                onClick={() => handleShowLess(index)}
                              >
                                Read less...
                              </button>
                            </ul>
                          ) : (
                            <button
                              className="sm-butn btn border text-white radius-9 mt-50 w-100 hover-lightBlue border-lightBlue"
                              style={{ fontSize: "13px" }}
                              onClick={() => handleShowMore(index)}
                            >
                              Read more...
                            </button>
                          )}
                        </div>
                      )}

                      <Link href="/contact">
                        <a className="sm-butn btn border text-white radius-9 mt-50 w-100 hover-lightBlue border-lightBlue">
                          <span style={{ color: "#fff" }}>Contact Us</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: "white" }}>
                *PLANS: Each plan has a minimum contract period of 6 months.
                This time is needed to establish campaigns, target the brand's
                audience, and achieve online positioning.
              </p>
              <p className="text-white text-center mt-50">
                Have a large team?{" "}
                <Link href="/contact">
                  <a
                    className="text-decoration-underline"
                    style={{ color: "#ea15c2ff" }}
                  >
                    Contact us
                  </a>
                </Link>{" "}
                for information about more enterprise options.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/pricing/shap_l.png" alt="" className="shap_l" />
      <img src="/assets/img/pricing/shap_r.png" alt="" className="shap_r" />
    </section>
  );
};

export default Plan;

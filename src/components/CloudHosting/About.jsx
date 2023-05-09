import React from "react";

const About = ({ rtl }) => {
  return (
    <section className="about style-9 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img wow fadeIn">
              <img src="/assets/img/about/about9.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <div className="section-head style-9 mb-40">
                <h6 className=" wow fadeInUp" style={{ fontSize: "2rem" }}>
                  about company
                </h6>
              </div>
              <ul>
                <li className=" wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/about/1.png" alt="" />
                  </span>
                  <p>
                    <strong className="color-darkBlue2">WHO WE ARE</strong>
                    <br />
                    IMAGINEBiG® is a development agency and software factory
                    that puts your brand at the center of consumers' attention.
                  </p>
                </li>
                <li className=" wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/about/2.png" alt="" />
                  </span>
                  <p>
                    <strong className="color-darkBlue2">Our MISSION:</strong>
                    <br />
                    To provide high quality, customized technology solutions to
                    help our clients achieve their business objectives and
                    improve their competitiveness in the marketplace.
                  </p>
                </li>
                <li className=" wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/about/3.png" alt="" />
                  </span>
                  <p>
                    <strong className="color-darkBlue2">Our VISION:</strong>
                    <br />
                    To be a leading organization in the industry, recognized for
                    excellence, innovation and customer focus; with a
                    collaborative work culture that allows us to continuously
                    improve the quality of our products and services.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

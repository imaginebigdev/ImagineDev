import React from "react";

const AboutEs = () => {
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
                <h6 className=" wow fadeInUp" style={{ fontSize: "1.5rem" }}>
                  Acerca de la compañía
                </h6>
              </div>
              <ul>
                <li className=" wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/about/1.png" alt="" />
                  </span>
                  <p>
                    <strong className="color-darkBlue2">Quienes Somos:</strong>
                    <br />
                    IMAGINEBiG® es una agencia de desarrollo y fábrica de
                    software que pone su marca en el centro de atención de los
                    consumidores.
                  </p>
                </li>
                <li className=" wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/about/2.png" alt="" />
                  </span>
                  <p>
                    <strong className="color-darkBlue2">Nuestra MISIÓN:</strong>
                    <br />
                    Brindar soluciones tecnológicas, personalizadas y de alta
                    calidad para ayudar a nuestros clientes a alcanzar sus
                    objetivos comerciales y mejorar su competitividad en el
                    mercado.
                  </p>
                </li>
                <li className=" wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/about/3.png" alt="" />
                  </span>
                  <p>
                    <strong className="color-darkBlue2">Nuestra Visión:</strong>
                    <br />
                    Ser una organización líder en la industria, reconocida por
                    excelencia, innovación y orientación al cliente; con una
                    cultura de trabajo colaborativa que nos permita mejorar la
                    calidad de nuestros productos y servicios.
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

export default AboutEs;

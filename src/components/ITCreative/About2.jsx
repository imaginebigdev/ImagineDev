import React from "react";

const About2 = () => {
  return (
    <section
      className="about style-8 section-padding bg-white"
      id="nosotros"
      style={{
        background:
          "linear-gradient(to right, black 50%, rgba(124, 0, 174, 0.8) 50%), radial-gradient(at center, rgba(72, 0, 103, 0.8), rgba(0, 0, 0, 0.8)), url('tu-imagen-de-fondo.jpg')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div
          className="colum align-items-center"
          style={{ justifyContent: "center" }}
        >
          <div className="col-lg-6">
            <div className="img mb-4 mb-lg-0 wow fadeIn">
              <img src="/assets/img/header/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info" style={{ justifyContent: "center" }}>
              <p
                className="text mb-40"
                style={{ textAlign: "justify", color: "white" }}
              >
                {" "}
                ¡Gestionamos, creamos interacción y promovemos la comunicación
                activa con tu comunidad en redes sociales!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;

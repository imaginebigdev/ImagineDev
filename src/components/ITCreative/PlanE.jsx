import Link from "next/link";
import plansE from "@data/IT/plansE.json";

const PlanE = () => {
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

  return (
    <section
      className="pricing style-2 border-top brd-light section-padding"
      data-scroll-index="6"
      /* style={{
        background:
          "linear-gradient(to right, black 50%, rgba(124, 0, 174, 0.8) 50%), radial-gradient(at center, rgba(72, 0, 103, 0.8), rgba(0, 0, 0, 0.8)), url('tu-imagen-de-fondo.jpg')",
        backgroundBlendMode: "multiply",
      }} */
    >
      <div className="container">
        <div className="section-head mb-30 text-center">
          <h3 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">
            3 planes premium de comunicación digital
          </h3>
          <h4 style={{ color: "white" }}>
            “La comunicación es un elemento fundamental para que las empresas
            crezcan. Si no comunicas, no existes”
          </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content">
              <div className="toggle_switch d-flex align-items-center justify-content-center mb-20"></div>
              <div className="row justify-content-center gx-0">
                {plansE.map((plan, index) => (
                  <div className="col-lg-4" key={index}>
                    <div
                      className={`pricing_card ${
                        plan.recommended ? "recomendado" : ""
                      } style-2`}
                    >
                      {plan.recommended && (
                        <span className="hint">Recomendado</span>
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
                        {plan.features.map((feature, i) => (
                          <li
                            className="border-top py-3 op-8 fw-light text-uppercase"
                            key={i}
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <a className="sm-butn btn border text-white radius-9 mt-50 w-100 hover-lightBlue border-lightBlue">
                          <span style={{ color: "#fff" }}>Contáctenos</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: "white" }}>
                *PLANES: Cada plan tiene un mínimo tiempo de vigencia de 6 meses
                de contratación. Este tiempo es lo que lleva acentar las
                campañas, el público objetivo de la marca y lograr el
                posicionamiento online
              </p>
              <p className="text-white text-center mt-50">
                ¿Tienes un equipo grande?{" "}
                <Link href="/contact">
                  <a
                    className="text-decoration-underline"
                    style={{ color: "#61218cff" }}
                  >
                    Contacta con nosotros
                  </a>
                </Link>{" "}
                para obtener información sobre más opciones empresariales{" "}
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

export default PlanE;

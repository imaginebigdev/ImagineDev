import { useState } from "react";
import emailjs from "@emailjs/browser";

const HeaderEsp = () => {
  const [input, setInput] = useState({
    option: "Desarrollo web",
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = {
      ...input,
      name: "Formulario Rápido",
      message:
        "Esta es una consulta del fomulario rápido del website de imagine big",
    };

    if (!errors.email && !errors.phone) {
      emailjs
        .send("service_xpn4bya", "template_o5lpgcm", email, "-M-JxKwbrJmx9jr-w")
        .then((res) => {
          alert("Mensaje enviado correctamente");
        })
        .catch((res) => {
          console.error(res);
        });
      setInput({
        email: "",
        option: "",
      });
      return;
    }
    alert("Campos faltantes o incorrectos");
  };

  const handleFormChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    const errores = validador({ ...input, [e.target.name]: e.target.value });
    setErrors(errores);
  };
  const validador = (inputs) => {
    let validations = {};
    const emailExpresion =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!inputs.email) {
      validations.email = "ingrese su email";
    } else if (!emailExpresion.test(inputs.email)) {
      validations.email = "Debe ingresar un email valido";
    }
    return validations;
  };

  return (
    <header className="style-3 overflow-hidden" data-scroll-index="0">
      <div className="container">
        <div className="content section-padding">
          <div className="row">
            <div className="col-lg-5">
              <div className="info">
                <h1 className="h1">
                  Nosotros proveemos <span>Soluciones</span>
                </h1>
                <p className="p">
                  para ayudar a hacer crecer su negocio a lo grande Creamos
                  expectativas en el centro de atención al consumidor a través
                  de diferentes topologías para Plataformas B2C y B2B.
                </p>
                <h5 className="h5">
                  Contactanos!{" "}
                  <span className="fw-normal ms-1">
                    Te contactaremos dentro de las próximas 24hs
                  </span>
                </h5>
                <form
                  action="contact.php"
                  className="form mt-30"
                  method="post"
                  onSubmit={handleFormSubmit}
                >
                  <div className="row gx-3">
                    <div className="col-6">
                      <div className="form-group input-with-icon">
                        <input
                          type="text"
                          name="email"
                          value={input.email}
                          onChange={handleFormChange}
                          className="form-control"
                          placeholder="Tu email *"
                        />
                        <span className="input-icon">
                          <i className="far fa-envelope"></i>
                        </span>
                      </div>
                      {errors.email ? (
                        <div style={{ color: "white" }}>{errors.email}</div>
                      ) : null}
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <select
                          className="form-select"
                          name="option"
                          value={input.option}
                          onChange={handleFormChange}
                        >
                          <option value="Desarrollo web">Desarrollo web</option>
                          <option value="Marketing digital">
                            Marketing digital
                          </option>
                          <option value="TRENDING, solucion de viralizacion">
                            TRENDING, solucion de viralizacion
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn dark-butn hover-darkBlue rounded-pill w-100 mt-3">
                        <span>Realizá tu consulta</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-img">
        <img src="/assets/img/header/header_3.png" alt="" className="pattern" />
        <img
          src="/assets/img/header/header_3_c.png"
          alt=""
          className="circle"
        />
        <img
          src="/assets/img/header/logo_sh_l.png"
          alt=""
          className="logo_shap"
        />
      </div>
    </header>
  );
};

export default HeaderEsp;

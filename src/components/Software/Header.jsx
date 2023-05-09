import { useState } from "react";
import emailjs from "@emailjs/browser";

const Header = ({ rtl }) => {
  const [input, setInput] = useState({
    option: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = {
      ...input,
      name: rtl ? "Formulario Rápido" : "Fast form",
      message: rtl
        ? "Esta es una consulta del fomulario rápido del website de imagine big"
        : "This is a quick form query from the imagine big website.",
    };

    if (!errors.email && !errors.phone) {
      emailjs
        .send("service_xpn4bya", "template_o5lpgcm", email, "-M-JxKwbrJmx9jr-w")
        .then((res) => {
          alert(
            rtl ? "Mensaje enviado correctamente" : "Message sent successfully"
          );
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
    alert(
      rtl ? "Campos faltantes o incorrectos" : "Missing or incorrect fields"
    );
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
      validations.email = rtl ? "ingrese su email" : "Type your email";
    } else if (!emailExpresion.test(inputs.email)) {
      validations.email = rtl
        ? "Debe ingresar un email valido"
        : "You must enter a valid email address";
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
                  We provide <span>solutions</span>
                </h1>
                <p className="p">
                  to help grow your business to big We create expectations in
                  the consumer attention center through different topologies for
                  B2C and B2B platforms.
                </p>
                <h5 className="h5">
                  Contact us!{" "}
                  <span className="fw-normal ms-1">
                    We’ll contact back in 24h
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
                          className="form-control"
                          value={input.email}
                          onChange={handleFormChange}
                          placeholder="Your Email *"
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
                          defaultValue={"Your inquiry about"}
                          value={input.option}
                          onChange={handleFormChange}
                        >
                          <option
                            value={rtl ? "الاختيار الاول" : "Web development"}
                          >
                            {rtl ? "الاختيار الاول" : "Web development"}
                          </option>
                          <option
                            value={rtl ? "الاختيار الاول" : "Digital Marketing"}
                          >
                            {rtl ? "الاختيار الاول" : "Digital Marketing"}
                          </option>
                          <option
                            value={
                              rtl
                                ? "الاختيار الثاني"
                                : "Viralization, Trending Solution"
                            }
                          >
                            {rtl
                              ? "الاختيار الثاني"
                              : "Viralization, Trending Solution"}{" "}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn dark-butn hover-darkBlue rounded-pill w-100 mt-3"
                        type="submit"
                      >
                        <span>Request A Consultation</span>
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

export default Header;

import { useState } from "react";
import axios from "axios";
import contactInfo from "@data/Contact/form.json";
import contactInfoRTL from "@data/Contact/form-rtl.json";
import emailjs from "@emailjs/browser";

const FormEsp = ({ style = "4", rtl }) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    option: "Cómo te podemos ayudar?",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: 0,
  });

  const contactInfoData = rtl ? contactInfoRTL : contactInfo;

  const handleFormChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    const errores = validador({ ...formData, [e.target.name]: e.target.value });
    setErrors(errores);
  };

  const validador = (inputs) => {
    let validations = {};
    const emailExpresion =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const phoneExpression = /^[0-9]{10}$/;
    if (!inputs.email) {
      validations.email = "ingrese su email";
    } else if (!emailExpresion.test(inputs.email)) {
      validations.email = rtl;
      ("Debe ingresar un email valido");
    }
    if (!inputs.phone) {
      validations.phone = rtl;
      ("Debe ingresar su telefono");
    } else if (!phoneExpression.test(inputs.phone)) {
      validations.phone = rtl;
      ("Ingrese un numero de telefono valido");
    }
    return validations;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.phone) {
      emailjs
        .send(
          "service_xpn4bya",
          "template_o5lpgcm",
          formData,
          "-M-JxKwbrJmx9jr-w"
        )
        .then((res) => {
          alert("Mensaje enviado correctamente");
        })
        .catch((res) => {
          console.error(res);
        });
      setFormdata({
        name: "",
        email: "",
        phone: "",
        website: "",
        option: "Cómo te podemos ayudar?",
        message: "",
      });
      return;
    }
    alert("Campos faltantes o incorrectos");
  };

  return (
    <section
      className={`contact section-padding pt-${
        style === "4" ? "0" : "50"
      } style-6`}
    >
      {style === "5" && (
        <>
          <div className="section-head text-center mb-100 style-5">
            <h2 className="mb-20">
              Ponerse en <span>contacto</span>
            </h2>
            <p>
              Nos pondremos en contacto de nuevo después de recibir su solicitud
              dentro de las próximas 24hs
            </p>
          </div>
          <div className="text-center mb-100">
            <h2 className="ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5">
              {contactInfoData.phone}
            </h2>
            <h4 className="fw-normal mb-20 color-000">
              {contactInfoData.email}
            </h4>
            <h4 className="fw-normal mb-10 color-000">
              {contactInfoData.address}
            </h4>
          </div>
        </>
      )}
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                action="contact.php"
                className="form"
                method="post"
                onSubmit={handleFormSubmit}
              >
                <p className="text-center text-danger fs-12px mb-30">
                  Los campos obligatorios estan marcados con *
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        className="form-control"
                        placeholder="Nombre *"
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        className="form-control"
                        placeholder="Dirección de correo electrónico *"
                        onChange={handleFormChange}
                      />
                      {errors.email ? <div>{errors.email}</div> : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        className="form-control"
                        placeholder="Número de teléfono (opcional)"
                        onChange={handleFormChange}
                      />
                      {errors.phone ? <div>{errors.phone}</div> : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        className="form-control"
                        placeholder="URL página web (opcional)"
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-20">
                      <select
                        className="form-select"
                        name="option"
                        value={formData.option}
                        onChange={handleFormChange}
                      >
                        <option value="Desarrollo Web">Desarrollo Web</option>
                        <option value="Marketing Digital">
                          Marketing Digital
                        </option>
                        <option value="Viralización, Solución Trending">
                          Viralización, Solución Trending
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        rows="10"
                        name="message"
                        value={formData.message}
                        className="form-control"
                        placeholder="Cómo te podemos ayudar?"
                        onChange={handleFormChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 text-center">
                    <input
                      type="submit"
                      value="Enviar Consulta"
                      className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img
            src="/assets/img/icons/contact_a.png"
            alt=""
            className="contact_a"
          />
          <img
            src="/assets/img/icons/contact_message.png"
            alt=""
            className="contact_message"
          />
        </div>
      </div>
    </section>
  );
};

export default FormEsp;

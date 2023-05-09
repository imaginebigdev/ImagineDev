import { useState } from "react";
import axios from "axios";
import contactInfo from "@data/Contact/form.json";
import contactInfoRTL from "@data/Contact/form-rtl.json";
import emailjs from "@emailjs/browser";

const Form = ({ style = "4", rtl }) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    option: "How can we help you?",
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
      validations.email = rtl ? "ingrese su email" : "Type your email";
    } else if (!emailExpresion.test(inputs.email)) {
      validations.email = rtl
        ? "Debe ingresar un email valido"
        : "You must enter a valid email address";
    }
    if (!inputs.phone) {
      validations.phone = rtl
        ? "Debe ingresar su telefono"
        : "You must enter your phone number";
    } else if (!phoneExpression.test(inputs.phone)) {
      validations.phone = rtl
        ? "Ingrese un numero de telefono valido"
        : "Enter a valid phone number";
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
          alert("Message sent successfully");
        })
        .catch((res) => {
          console.error(res);
        });
      setFormdata({
        name: "",
        email: "",
        phone: "",
        website: "",
        option: "How can we help you?",
        message: "",
      });
      return;
    }
    alert("Missing or incorrect fields");
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
              Get In"
              <span>Touch</span>
            </h2>
            <p>We will contact again after receive your request in 24h</p>
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
                  "The field is required mark as *
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        className="form-control"
                        placeholder={rtl ? "الاسم" : "Name"}
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
                        placeholder="Email Address *"
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
                        placeholder="Phone Number (option)"
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
                        placeholder="Your Website (option)"
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
                        <option value="Web development">Web development</option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option value="Viralization, Trending Solution">
                          Viralization, Trending Solution
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
                        placeholder="How can we help you?"
                        onChange={handleFormChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 text-center">
                    <input
                      type="submit"
                      value="Send Your Request"
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

export default Form;

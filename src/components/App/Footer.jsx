import Link from "next/link";

const Footer = ({ noWave }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
  };

  return (
    <footer
      className={`style-4 ${noWave ? "mt-0 pt-100" : ""}`}
      data-scroll-index="8"
    >
      <div className="container">
        <div className="section-head text-center style-4">
          <h2 className="mb-10">
            let's talk about your <span>PROJECT</span>{" "}
          </h2>
          <p>The growth of your brand is one click away.</p>
          <div className="d-flex align-items-center justify-content-center mt-50">
            <Link href="/contact">
              <small className="btn rounded-pill bg-blue4 fw-bold text-white me-4">
                {" "}
                CONTACT US
              </small>
            </Link>
          </div>
        </div>
        <div className="foot mt-80">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img src="/assets/img/logo-ib.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="links">
                <li>
                  <Link className="active" href="/en">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <div
                className="dropdown"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="/assets/img/lang.png" alt="" className="me-2" />
                  <small>English</small>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link href="/es">
                      <span
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                      >
                        Spanish
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copywrite text-center">
          <small className="small">
            © 2023 Copyrights by{" "}
            <a className="fw-bold text-decoration-underline">Imagine Big</a> All
            Rights Reserved. Designed by{" "}
            <Link href="/">
              <span className="fw-bold text-decoration-underline">
                Imagine Big
              </span>
            </Link>
          </small>
        </div>
      </div>
      {!noWave && (
        <img
          src="/assets/img/footer/footer_4_wave.png"
          alt=""
          className="wave"
        />
      )}
    </footer>
  );
};

export default Footer;

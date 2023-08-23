import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Link2 from "next/link";

import navbarScrollEffect from "@common/navbarScrollEffect";

const Navbar2 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

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
    <div className="navs-container pt-4">
      <nav
        className="navbar navbar-expand-lg navbar-light style-8"
        ref={navbarRef}
      >
        <div className="container">
          <Link2 className="navbar-brand" href="/">
            <img className="logo" src="/assets/img/logo_home8.png" alt="" />
          </Link2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ps-4">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="inicio"
                  smooth="true"
                  duration={100}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="nosotros"
                  smooth="true"
                  duration={100}
                >
                  De Qué Trata
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="modulo1"
                  smooth="true"
                  duration={100}
                >
                  Módulo 1
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="modulo2"
                  smooth="true"
                  duration={100}
                >
                  Módulo 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="modulo3"
                  smooth="true"
                  duration={100}
                >
                  Módulo 3
                </Link>
              </li>

              <li className="nav-item">
                <a href={`/`} className="nav-link">
                  Volver
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;

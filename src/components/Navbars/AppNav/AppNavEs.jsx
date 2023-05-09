import Link from "next/link";

const NavbarEs = ({ navbarRef }) => {
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
    <nav
      className="navbar navbar-expand-lg navbar-light style-4"
      ref={navbarRef}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo-ib.png" alt="" />
        </a>
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
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item dropdown">
              <Link href="/es">
                <a className="nav-link">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/nosotros">
                <a className="nav-link">Nosotros</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contacto">
                <a className="nav-link">Contacto</a>
              </Link>
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
              <img src="/assets/img/langes.png" alt="" className="me-2" />
              <small>Español</small>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="/en">
                  Inglés
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarEs;

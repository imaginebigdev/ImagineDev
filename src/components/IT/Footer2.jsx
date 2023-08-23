import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="style-2 pt-80 pb-60 bg-gray2 border-top brd-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-6">
            <div className="foot_logo">
              <img src="/assets/img/logo_ll.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6" style={{ textAlign: "center" }}>
            <div className="foot_links text-uppercase text-center small">
              {/*  <Link to="inicio" smooth="true" duration={100}>
                <span className="mx-4">Inicio </span>
              </Link> */}
              <Link to="nosotros" smooth="true" duration={100}>
                <span className="mx-4">De Qué Trata</span>
              </Link>
              <Link to="modulo1" smooth="true" duration={100}>
                <span className="mx-4">Módulo 1</span>
              </Link>
              <Link to="modulo2" smooth="true" duration={100}>
                <span className="mx-4">Módulo 2</span>
              </Link>
              <Link to="modulo3" smooth="true" duration={100}>
                <span className="mx-4">Módulo 3</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-end">
            <div className="socail-icons">
              <a
                href="https://www.snapchat.com/add/avivateok"
                target="_blank"
                rel="noreferrer"
                className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
              >
                <i className="fab fa-snapchat"></i>
              </a>
              <a
                href="https://www.tiktok.com/@avivate.ar"
                target="_blank"
                rel="noreferrer"
                className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://www.youtube.com/@AVIVATE"
                target="_blank"
                rel="noreferrer"
                className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/avivate.ar/"
                target="_blank"
                rel="noreferrer"
                className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-30">
          <div className="small">
            <span className="op-6">© 2023 Hecho con pasion por </span>
            <a
              href="https://www.imaginebig.dev/"
              className="mx-1 color-blue4"
              target="_blank"
              rel="noreferrer"
            >
              Imagine Big
            </a>
            <span className="op-6"> Todo los derechos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

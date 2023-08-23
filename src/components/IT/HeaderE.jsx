import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const HeaderE = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <header className="style-2 overflow-hidden" data-scroll-index="1">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 justify-content-center">
            <div className="img mb-4 mb-lg-0 wow fadeIn">
              <img src="/assets/img/header/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="content text-center text-light text-capitalize">
              <div className="top_info pb-100">
                <a
                  href="https://www.youtube.com/watch?v=dF2M_dreLeQ"
                  className="vid-btn"
                  onClick={openVideo}
                >
                  <i className="bi bi-play-fill wow heartBeat infinite slower"></i>
                </a>
              </div>
              <br></br>
              <h4 style={{ textTransform: "none" }}>
                Despierta el poder de tu marca a través de la magia de las
                conexiones digitales
              </h4>
              <p className="d-block mt-40" style={{ textTransform: "none" }}>
                En este vasto mundo digital, donde las voces se entrelazan y las
                historias cobran vida, existe un lugar donde tu marca puede
                brillar con luz propia. Un lugar donde las comunidades no solo
                conocen tus productos o servicios, sino que también abrazan tu
                esencia con pasión y autenticidad.
              </p>
              <p className="d-block mt-40" style={{ textTransform: "none" }}>
                Bienvenido a un universo de conversaciones genuinas, donde cada
                palabra es un lazo, cada interacción es un puente y cada
                experiencia es un vínculo. Aquí, en el corazón de las redes
                sociales y las comunidades digitales, nace una historia que es
                tuya, pero también es de aquellos que la viven con emoción.
              </p>
              <Link href="/contact">
                <a
                  className="btn sm-butn border text-white radius-9 mt-60 hover-darkBlue"
                  q
                >
                  <span style={{ color: "#fff" }}>
                    Conoce mas sobre nosotros
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="dF2M_dreLeQ"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default HeaderE;

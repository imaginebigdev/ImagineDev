import Link from "next/link";

const ThirdContentEsp = ({ marketing }) => {
  return (
    <div className="content trd-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/marketing.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">Marketing Digital</small>
                <h2 className="mb-30">
                  Sabemos lo que <span> significa un cliente para usted</span>{" "}
                </h2>
              </div>
              <p className="text mb-40">
                Nuestra solución AceleraClick! es el programa de transformación
                digital más completo para su negocio. Comprometidos con sus
                ventas, escalamos su marca, la hacemos brillar y hacemos crecer
                su reputación online.
              </p>
              <ul>
                {marketing.map((marketing, index) => (
                  <li
                    className={`d-flex align-items-center ${
                      marketing.active ? "" : "op-4"
                    }`}
                    key={index}
                  >
                    <i className="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                    <h6 className="fw-bold">{marketing.title}</h6>
                  </li>
                ))}
              </ul>
              <Link href="https://www.youtube.com/watch?v=dF2M_dreLeQ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-pill bg-blue4 fw-bold text-white mt-50"
                >
                  <small>Descúbrelo ahora</small>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_bubble.png"
        alt=""
        className="bubble"
      />
    </div>
  );
};

export default ThirdContentEsp;

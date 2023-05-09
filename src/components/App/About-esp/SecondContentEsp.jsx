const SecondContentEsp = ({ viralizacion }) => {
  return (
    <div className="content sec-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  Nos viralizamos en multiples plataformas.
                </small>
                <h2 className="mb-15">
                  <span>
                    {" "}
                    <i className="fa fa-hashtag"></i> TRENDING
                  </span>{" "}
                  Solución de viralización
                </h2>
                <small className="title_small">Sabemos de viralización</small>
              </div>
              <p className="text mb-10">
                Viralización es cuando una unidad de información (audio o video)
                adquiere un carácter de conocimiento masivo a través de un
                proceso informático de difusión.
              </p>
              <p className="text mb-40">
                Nuestra solución{" "}
                <span style={{ color: "#5842bc" }}> TRENDING </span> se basa en
                mapear el escenario de posibilidades que existe a través de
                diferentes vias de comunicación masiva. Incluye:
              </p>
              <ul>
                {viralizacion.map((item, index) => (
                  <li className="d-flex align-items-center mb-3" key={index}>
                    <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                      <i className={item.icon}></i>
                    </small>
                    <h6 className="fw-bold">{item.title}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/2mobiles.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_bubble2.png"
        alt=""
        className="bubble2"
      />
    </div>
  );
};

export default SecondContentEsp;

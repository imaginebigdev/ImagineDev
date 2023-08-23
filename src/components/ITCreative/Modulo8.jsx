const Modulo8 = () => {
  return (
    <div
      className="content sec-content"
      id="modulo1"
      style={{
        background:
          "linear-gradient(to right, black 50%, rgba(124, 0, 174, 0.8) 50%), radial-gradient(at center, rgba(72, 0, 103, 0.8), rgba(0, 0, 0, 0.8)), url('tu-imagen-de-fondo.jpg')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4" style={{ color: "white" }}>
                <h4 className="mb-30">IMAGINE BIG presenta</h4>
                <h3>VIDEO EDICIÓN</h3>
              </div>
              <p className="text mb-40" style={{ color: "white" }}>
                diseño y creación de videos. vídeo 3d gráficos en movimiento.
                creamos contenido para youtube, tiktok, vimeo, twitch, facebook
                live, instagram reels & historys
              </p>
              <p className="text mb-40" style={{ color: "white" }}>
                "Simplicidad es la máxima sofisticación." (Leonardo da vinci)
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/fundamentos.png" alt="" />
            </div>
          </div>
        </div>
        <div className="content sec-content pt-100" id="modulo2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 order-lg-2">
                <div className="info">
                  <div
                    className="section-head style-4"
                    style={{ color: "white" }}
                  >
                    <h3>POSTEO</h3>
                    <p className="text mb-40">
                      Creamos el plan social de la marca y ejecutamos las
                      acciones de posteo y publicación en todos los canales
                      sociales.
                    </p>
                    <p className="text mb-40">
                      “En las redes sociales no vendes, enamoras” (Octavio
                      Regalado)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-lg-0">
                {" "}
                {/* Cambiado el tamaño a col-lg-5 */}
                <div className="img mb-30 mb-lg-0">
                  <img src="/assets/img/about/frontend.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo8;

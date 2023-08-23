const Modulo7 = () => {
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
                <h3>ARTE</h3>
              </div>
              <p className="text mb-40" style={{ color: "white" }}>
                Creamos la estética de la marca, definimos patrones, colores,
                tipografía, iconos, banco de imágenes asociadas al branding de
                la marca.
              </p>
              <p className="text mb-40" style={{ color: "white" }}>
                "La tecnología hace posible lo que antes era imposible. El arte
                lo hace real". (Michael Gagliano)
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
                    <h3>DISEÑO</h3>
                    <p className="text mb-40">
                      Desarrollamos cada pieza gráfica con los formatos
                      adecuados y estandarizados para Facebook, Twitter, TikTok,
                      Instagram, Youtube, Twicth, Snapchat, Pinterest, Reddit.
                    </p>
                    <p className="text mb-40">
                      "Todo gran diseño comienza con una historia aún mejor".
                      (Lorinda Mammo)
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

export default Modulo7;

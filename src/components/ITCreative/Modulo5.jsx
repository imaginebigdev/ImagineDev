const Modulo5 = () => {
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
              <div className="section-head style-4">
                <h2 className="mb-30">
                  <span> Acelera </span>
                  <br></br>
                  <span>Click!</span>
                  <h4 style={{ color: "white" }}>digital transformation</h4>
                </h2>
              </div>
              <div className="section-head style-4" style={{ color: "white" }}>
                <h4 className="mb-30">IMAGINE BIG presenta</h4>
                <h3>ACELERA CLICK</h3>
                <h4>DIGITAL TRANSFORMACION</h4>
                <h3>PROGRAMA</h3>
              </div>
              <p className="text mb-40">
                brindamos una solucion s.a.s. (software as a service) Software
                como servicio
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
                    <h4>NUESTRA</h4>
                    <h3>solución</h3>
                    <h4>potencia sus redes sociales</h4>
                    <div>
                      <img></img>
                    </div>
                    <h4>mejora su reputación online</h4>
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

export default Modulo5;

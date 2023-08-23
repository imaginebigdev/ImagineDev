const Modulo1 = () => {
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
              <p className="text mb-40" style={{ color: "white" }}>
                el programa de transformación digital MÁS COMPLETO EN comercio
                electronico y redes sociales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo1;

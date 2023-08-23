import features4 from "@data/DataAnalysis/features4";

const Modulo2 = () => {
  return (
    <div
      className="content sec-content pt-100"
      id="modulo2"
      style={{
        background:
          "linear-gradient(to right, black 50%, rgba(124, 0, 174, 0.8) 50%), radial-gradient(at center, rgba(72, 0, 103, 0.8), rgba(0, 0, 0, 0.8)), url('tu-imagen-de-fondo.jpg')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-2">
            {" "}
            {/* Cambiado el tamaño a col-lg-6 */}
            <div className="info">
              <div className="section-head style-4">
                <h2 className="mb-30">
                  <span> Acelera </span>
                  <br></br>
                  <span>Click!</span>
                  <h4 style={{ color: "white" }}>digital transformation</h4>
                </h2>
              </div>
              <div className="section-head style-4">
                <h2 className="mb-30" style={{ color: "white" }}>
                  “El futuro de los negocios es social”
                </h2>
                <h3 style={{ color: "white" }}>
                  (Barry Libert New York Times Post)
                </h3>
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
  );
};

export default Modulo2;

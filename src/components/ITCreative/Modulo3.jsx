import features5 from "@data/DataAnalysis/features5";

const Modulo3 = () => {
  return (
    <div
      className="content sec-content pt-100"
      id="modulo3"
      style={{
        background:
          "linear-gradient(to right, black 50%, rgba(124, 0, 174, 0.8) 50%), radial-gradient(at center, rgba(72, 0, 103, 0.8), rgba(0, 0, 0, 0.8)), url('tu-imagen-de-fondo.jpg')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-6">
            {" "}
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
                  SU MARCA A TRAVÉS DE UN PLAN
                </h2>
              </div>
              <ul style={{ color: "white" }}>
                <li>1) MEJORARÁ LA COMUNICACIÓN ACTIVA EN REDES SOCIALES</li>
                <li>2) ELEVARÁ SU REPUTACIÓN EN GOOGLE</li>
                <li>3) TENDRÁ ACTUALIZADA LA WEB DE VENTA EN LÍNEA</li>
                <li>4) MEJORARÁ LA IMAGEN Y PRESENTACIÓN A SUS CONSUMIDORES</li>
                <li>5) CREARÁ NUEVAS OPORTUNIDADES DE NEGOCIO</li>
              </ul>
            </div>
          </div>
          <p style={{ color: "white", textAlign: "justify" }}>
            *PLANES: Cada plan tiene un mínimo tiempo de vigencia de 6 meses de
            contratación. Este tiempo es lo que lleva acentar las campañas, el
            público objetivo de la marca y lograr el posicionamiento online
          </p>
          <div className="col-lg-5 order-lg-5">
            {" "}
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/backend.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo3;

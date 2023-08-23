import features3 from "@data/DataAnalysis/features3";

const Modulo4 = () => {
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
              <h2 className="mb-30" style={{ color: "white" }}>
                INGENIERIA SOCIAL
              </h2>
            </div>
            <p style={{ color: "white" }}>
              GESTIÓN DE COMUNIDADES DIGITALES OPTIMIZACIÓN PERFIL DIGITAL (SMO)
              Alineamos tus redes sociales con la personalidad de tu marca
              destacando tus propuestas de valor. ¡Logramos que tu comunidad
              tenga una impresión positiva de tu marca desde el primer contacto!
              CREACIÓN DE CONTENIDO (SMM) Nuestro equipo creativo pone en marcha
              una estrategia de contenido pensada especialmente para tu marca.
              ¡Educamos, vendemos y ofrecemos valor! Sabemos que la base de una
              comunidad activa y enganchada es el contenido de calidad. PAID
              SOCIAL - ATRACCIÓN (SPAY) Apoyamos la estrategia con diferentes
              canales pagos para llevar tráfico calificado a tus redes sociales.
              ¡Hacemos que cada vez más personas afines a tu marca te conozcan y
              se enamoren de ti! GENERACIÓN DE CONVERSACIÓN La magia de las
              redes sociales está en el poder de conectarnos. Creamos acciones e
              interactuamos con tu comunidad en tus canales digitales. ¡Hacemos
              social listening para monitorear la percepción de tu marca!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo4;

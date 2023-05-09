const IntegrationEsp = ({ integrations, rtl }) => {
  return (
    <div className="integration pt-60" data-scroll-index="3">
      <div className="section-head text-center style-4">
        <small className="title_small">Nuestro Stack</small>
        <h2 className="mb-20">
          Nostros usamos un Stack <span> MERN</span>{" "}
        </h2>
        <p>Realizamos tu proyecto con tecnologías de última generación.</p>
      </div>
      <div className="container">
        <div className="content">
          {integrations.map((integration, index) => (
            <div className="img" key={index}>
              <img src={integration} alt="" className="mt-30" />
            </div>
          ))}
        </div>
      </div>
      <img src="/assets/img/about/intg_back.png" alt="" className="intg-back" />
    </div>
  );
};

export default IntegrationEsp;

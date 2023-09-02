import communityData from "@data/Contact/communityPy.json";

const CommunityPy = () => {
  return (
    <section className="community section-padding style-5">
      <div className="container">
        <div className="section-head text-center style-4 mb-40">
          <small className="title_small">Contactanos</small>
          <h2 className="mb-20">
            Ponerse en <span>Contacto</span>{" "}
          </h2>
          <p>
            {" "}
            Nos pondremos en contacto de nuevo después de recibir su solicitud
            dentro de las próximas 24hs
          </p>
        </div>
        <div className="content rounded-pill">
          {communityData.map((card, i) => (
            <div className="commun-card" key={i}>
              <div className="icon icon-45">
                <img src={card.icon} alt="" />
              </div>
              <div className="inf">
                <h6>{card.info}</h6>
                <h6>{card.info2}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPy;

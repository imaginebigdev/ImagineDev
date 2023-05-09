import communityCardsrRTL from "@data/App/community-rtl.json";

const CommunityEsp = () => {
  const data = communityCardsrRTL;

  return (
    <section className="community section-padding pt-0 style-4">
      <div className="container">
        <div className="section-head text-center style-4">
          <small className="title_small">Comunidad de Imagine Big</small>
          <h2 className="mb-30">
            Únase a nuestra <span>Comunidad</span>{" "}
          </h2>
        </div>
        <div className="content">
          {data.map((item, index) => (
            <a
              href={item.link}
              className="commun-card"
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <div className="inf">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEsp;

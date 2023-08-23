import communityCardsE from "@data/App/communityE.json";

const Community2E = ({ rtl }) => {
  const data = communityCardsE;

  return (
    <section
      className="community section-padding pt-0 style-4"
      style={{
        backgroundColor: "#2f0049ff",
        WebkitTextSizeAdjust: "100%",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div className="container">
        <div className="section-head text-center style-4">
          <small
            className="title_small"
            style={{ backgroundColor: "#2f0049ff" }}
          >
            {rtl ? "مجتمع نوتيرو" : "Comunidad Imagine Big"}
          </small>
          <h2 className="mb-30" style={{ color: "white" }}>
            {rtl ? "انضم إلى" : "Únase a nuestra"}{" "}
            <span>{rtl ? "مركزنا" : "Comunidad"}</span>{" "}
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
                <h5 style={{ color: "white" }}>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community2E;

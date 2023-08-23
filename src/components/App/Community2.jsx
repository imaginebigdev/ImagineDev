import communityCards from "@data/App/community.json";
import communityCardsrRTL from "@data/App/community-rtl.json";

const Community2 = ({ rtl }) => {
  const data = rtl ? communityCardsrRTL : communityCards;

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
            {rtl ? "مجتمع نوتيرو" : "Imagine Big Community"}
          </small>
          <h2 className="mb-30" style={{ color: "#fff" }}>
            {rtl ? "انضم إلى" : "Join Into"}{" "}
            <span>{rtl ? "مركزنا" : "Our Hub"}</span>{" "}
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
                <h5 style={{ color: "#fff" }}>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community2;

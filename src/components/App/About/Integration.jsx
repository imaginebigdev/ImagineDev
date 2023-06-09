const Integration = ({ integrations, rtl }) => {
  return (
    <div className="integration pt-60" data-scroll-index="3">
      <div className="section-head text-center style-4">
        <small className="title_small">
          {rtl ? "دفعة لمرة واحدة" : "Our Stack"}
        </small>
        <h2 className="mb-20">
          {rtl ? "متوافق مع" : "We use Stack"}{" "}
          <span>{rtl ? "التطبيقات الشعبية" : "MERN"}</span>{" "}
        </h2>
        <p>
          {rtl
            ? "نوتيرو يتكامل مع التطبيقات الشعبية. تساعدك على التواصل والتعاون بسهولة"
            : "We carry out your project with the latest generation technologies"}
        </p>
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

export default Integration;

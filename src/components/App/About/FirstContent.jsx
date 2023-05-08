import Link from "next/link";

const FirstContent = ({ features, rtl }) => {
  return (
    <div className="content frs-content" id="about" data-scroll-index="2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/ipad.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  {rtl
                    ? "نوتيرو - تطبيق مذكرة سهل الاستخدام"
                    : "Imagine Big - Web Development"}
                </small>
                <h2 className="mb-30">
                  {rtl ? "تطبيق لاصحاب" : "Agile development"}{" "}
                  <span> {rtl ? "الابداع" : " platforms"} </span>{" "}
                </h2>
              </div>
              <p className="text mb-40">
                {rtl &&
                  "حافظ على تركيزك وإنتاجيتك مع مساحة  خالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ."}
                {!rtl && (
                  <>
                    We adapt different technologies for B2C or B2B applications
                    and developments that manage clients in high demand. Our
                    control panel in our developments allows a friendly use for
                    our clients.
                  </>
                )}
              </p>
              <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  {features.map((features, index) => (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id={`heading${features.id}`}
                      >
                        {" "}
                        <button
                          className={`accordion-button ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${features.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${features.id}`}
                        >
                          <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                            <i className={features.icon}></i>
                          </small>{" "}
                          {features.title1}
                        </button>
                      </h2>
                      <div
                        id={`collapse${features.id}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${features.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{features.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <Link to="/contact">
                <a className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                  <small> Contact Us </small>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_lines.png"
        alt=""
        className="lines"
      />
      <img
        src="/assets/img/about/about_s4_bubble.png"
        alt=""
        className="bubble"
      />
    </div>
  );
};

export default FirstContent;

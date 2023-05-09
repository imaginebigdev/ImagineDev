import faqRTL from "@data/App/faq-rtl.json";

const FAQEs = () => {
  const data = faqRTL;

  return (
    <section
      className="faq section-padding style-4 pt-50"
      data-scroll-index="7"
    >
      <div className="container">
        <div className="section-head text-center style-4">
          <small className="title_small">Preguntas Frecuentes</small>
          <h2 className="mb-30">
            ¿Necesitas <span>Ayuda</span>?{" "}
          </h2>
        </div>
        <div className="content">
          <div className="faq style-3 style-4">
            <div className="accordion" id="accordionSt4">
              <div className="row gx-5">
                <div className="col-lg-6">
                  {data.map(
                    (item, index) =>
                      index <= 3 && (
                        <div
                          className={`accordion-item ${
                            index === 3 ? "" : "border-bottom"
                          } rounded-0`}
                          key={index}
                        >
                          <h2
                            className="accordion-header"
                            id={`heading${item.id + 10}`}
                          >
                            <button
                              className="accordion-button collapsed rounded-0 py-4"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${item.id + 10}`}
                              aria-expanded="true"
                              aria-controls={`collapse${item.id + 10}`}
                            >
                              {item.question}
                            </button>
                          </h2>
                          <div
                            id={`collapse${item.id + 10}`}
                            className="accordion-collapse collapse rounded-0"
                            aria-labelledby={`heading${item.id + 10}`}
                            data-bs-parent="#accordionSt4"
                          >
                            <div className="accordion-body">
                              <>
                                {item.answer.part1} <br /> {item.answer.part2}
                                <ul>
                                  {" "}
                                  <li>{item.answer.part3}</li>
                                  <li>{item.answer.part4}</li>
                                  <li>{item.answer.part5}</li>
                                  <li>{item.answer.part6}</li>
                                  <li>{item.answer.part7}</li>
                                  <li>{item.answer.part8}</li>
                                </ul>
                              </>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
                <div className="col-lg-6">
                  {data.map(
                    (item, index) =>
                      index > 3 && (
                        <div
                          className={`accordion-item ${
                            index === faqRTL.length - 1 ? "" : "border-bottom"
                          } rounded-0`}
                          key={index}
                        >
                          <h2
                            className="accordion-header"
                            id={`heading${item.id + 10}`}
                          >
                            <button
                              className={`accordion-button ${
                                index !== 4 ? "collapsed" : ""
                              } rounded-0 py-4`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${item.id + 10}`}
                              aria-expanded="true"
                              aria-controls={`collapse${item.id + 10}`}
                            >
                              {item.question}
                            </button>
                          </h2>
                          <div
                            id={`collapse${item.id + 10}`}
                            className={`accordion-collapse collapse rounded-0 ${
                              index !== 4 ? "" : "show"
                            }`}
                            aria-labelledby={`heading${item.id + 10}`}
                            data-bs-parent="#accordionSt4"
                          >
                            <div className="accordion-body">
                              <>
                                {item.answer.part1} <br /> {item.answer.part2}
                              </>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQEs;

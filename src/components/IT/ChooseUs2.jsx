import Link from "next/link";
import Numbers from "./Numbers";
import chooseUsData from "@data/IT/chooseus2.json";

const ChooseUs2 = () => {
  return (
    <section
      className="choose-us style-2 border-top bg-darkBlue brd-light section-padding"
      data-scroll-index="4"
    >
      <div className="container">
        <div className="section-head mb-30 text-center">
          <h2 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">
            YOUR BRAND THROUGH A PLAN
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img pe-lg-5">
              <img src="/assets/img/choose_us/circles.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              {/* <p className="text-white text-uppercase mb-60">
                YOUR BRAND THROUGH A PLAN
              </p> */}
              <ul>
                {chooseUsData.map((item, index) => (
                  <li
                    className={`d-flex ${
                      index !== chooseUsData.length - 1 ? "mb-30" : ""
                    }`}
                    key={index}
                  >
                    <div className="icon me-4 flex-shrink-0">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="inf">
                      <h5 className="text-white text-capitalize mb-2">
                        {item.title}
                      </h5>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Numbers />
      </div>
    </section>
  );
};

export default ChooseUs2;

const Header = () => {
  return (
    <header className="style-3 overflow-hidden" data-scroll-index="0">
      <div className="container">
        <div className="content section-padding">
          <div className="row">
            <div className="col-lg-5">
              <div className="info">
                <h1 className="h1">
                  We provide <span>solutions</span>
                </h1>
                <p className="p">
                  to help grow your business to big We create expectations in
                  the consumer attention center through different topologies for
                  B2C and B2B platforms.
                </p>
                <h5 className="h5">
                  Contact us!{" "}
                  <span className="fw-normal ms-1">
                    We’ll contact back in 24h
                  </span>
                </h5>
                <form action="contact.php" className="form mt-30" method="post">
                  <div className="row gx-3">
                    <div className="col-6">
                      <div className="form-group input-with-icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Email *"
                        />
                        <span className="input-icon">
                          <i className="far fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <select
                          className="form-select"
                          defaultValue={"Your inquiry about"}
                        >
                          <option value="">Your inquiry about</option>
                          <option value="">Your inquiry about</option>
                          <option value="">Your inquiry about</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn dark-butn hover-darkBlue rounded-pill w-100 mt-3">
                        <span>Request A Consultation</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-img">
        <img src="/assets/img/header/header_3.png" alt="" className="pattern" />
        <img
          src="/assets/img/header/header_3_c.png"
          alt=""
          className="circle"
        />
        <img
          src="/assets/img/header/logo_sh_l.png"
          alt=""
          className="logo_shap"
        />
      </div>
    </header>
  );
};

export default Header;

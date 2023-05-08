const SecondContent = ({ accordions, rtl }) => {
  return (
    <div className="content sec-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  {rtl
                    ? "إدارة أفضل للملاحظات"
                    : "We viralize on these platforms."}
                </small>
                <h2 className="mb-15">
                  <span>
                    {" "}
                    <i className="fa fa-hashtag"></i>{" "}
                    {rtl ? "في امان" : "TRENDING"}{" "}
                  </span>
                  {rtl ? "ملاحظاتك" : ", Viralization Solution "}
                  <small className="title_small">
                    {rtl
                      ? "إدارة أفضل للملاحظات"
                      : "We know about viralization"}
                  </small>
                </h2>
              </div>
              <p className="text mb-10">
                {rtl
                  ? "يتزامن تلقائيًا عبر جميع أجهزتك. يمكنك أيضًا الوصول إلى الملاحظات وكتابتها بدون اتصال بالإنترنت"
                  : "Viralization is when a unit of information (audio or video) acquires a character of massive knowledge through a computer process of diffusion."}
              </p>
              <p className="text mb-40">
                <span style={{ color: "#5842bc" }}>Our TRENDING </span>
                {rtl
                  ? "يتزامن تلقائيًا عبر جميع أجهزتك. يمكنك أيضًا الوصول إلى الملاحظات وكتابتها بدون اتصال بالإنترنت"
                  : " solution is based on mapping the scenario of possibilities that exist through different mass communication channels. It includes:"}
              </p>
              <ul>
                {accordions.map((item, index) => (
                  <li className="d-flex align-items-center mb-3" key={index}>
                    <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                      <i className={item.icon}></i>
                    </small>
                    <h6 className="fw-bold">{item.title}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/2mobiles.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_bubble2.png"
        alt=""
        className="bubble2"
      />
    </div>
  );
};

export default SecondContent;

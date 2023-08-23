import clients from "@data/App/clients.json";

const Abales = () => {
  return (
    <section className="clients style-4 pt-80">
      <div className="container">
        <div className="text-center">
          <h5 className="fw-bold mb-60">Nos Acomañan y Abalan ...</h5>
        </div>
        <div className="client-logos pb-70 d-flex justify-content-center align-items-center">
          <div className="row">
            {clients.map((client, index) => (
              <div className="col-3 col-lg-2" key={index}>
                <img style={{ width: "950px" }} src={client.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abales;

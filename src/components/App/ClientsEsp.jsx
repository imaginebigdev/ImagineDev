import clients from "@data/App/clients.json";

const ClientsEsp = () => {
  return (
    <section className="clients style-4">
      <div className="container">
        <div className="text-center">
          <h5 className="fw-bold mb-60">
            <span className="color-blue4">+ de 50 clientes nos respaldan,</span>{" "}
            entre ellos ...
          </h5>
        </div>
        <div className="client-logos pb-70">
          <div className="row align-items-center">
            {clients.map((client, index) => (
              <div className="col-6 col-lg-2" key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${client.url}`}
                  className="img d-block"
                >
                  <img src={client.image} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsEsp;

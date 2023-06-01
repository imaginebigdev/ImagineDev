import teamMembers from "@data/App/team.json";

const Team = ({ en }) => {
  return (
    <section className="team section-padding style-6">
      <div className="content">
        <div className="container">
          <div className="section-head text-center style-4 mb-60">
            <h2 className="mb-20">
              {en ? "Our" : "Nuestro"} <span>{en ? "Team" : "Equipo"}</span>{" "}
            </h2>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div
                  className={`team-card ${
                    index !== teamMembers.length - 1 ? "mb-30 mb-lg-0" : ""
                  } style-6`}
                >
                  <div className="img img-cover">
                    <img src={member.picture} alt="" />
                    <div className="social-icons">
                      <a
                        href={member.linkedin}
                        className="me-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <div className="info">
                    <a className="d-block" href="#">
                      <h6>{member.name}</h6>
                    </a>
                    <small>{member.position2}</small>{" "}
                    <small>{member.position}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

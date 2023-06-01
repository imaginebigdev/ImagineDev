import Link from "next/link";
import teamMembers from "@data/Software/team.json";

const Team = ({ en }) => {
  return (
    <section
      className="team section-padding style-1 team-blue2"
      data-scroll-index="6"
    >
      <div className="container">
        <div className="section-head long-shape style-3 text-center mb-70">
          <h3>
            {en ? "Meet Our" : "Conoce nuestro"}{" "}
            <span> {en ? "Team" : "Equipo"}</span>
          </h3>
        </div>
        <div className="content">
          {teamMembers.map((member, i) => (
            <div className="team_box" key={i}>
              <div className="avatar">
                <img src={member.picture} alt="" />
              </div>
              <div className="info">
                <h6>
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    {member.name}
                  </a>
                </h6>
                <small>{member.position}</small>
                <div className="social_icons">
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bttns mt-4 text-center mt-50">
          <Link href={en ? "/contact" : "/contacto"}>
            <a className="btn rounded-pill border-blue2 hover-blue2 sm-butn mx-1">
              <span>{en ? "Join our team" : "Trabajo con nosotros"}</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;

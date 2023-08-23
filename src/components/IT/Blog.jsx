import Link from "next/link";
import blogs from "@data/IT/blog.json";

const Blog = () => {
  const firstBlog = blogs;

  return (
    <section
      className="blog style-2 section-padding"
      data-scroll-index="7"
      style={{
        background:
          "linear-gradient(to right, black 50%, rgba(124, 0, 174, 0.8) 50%), radial-gradient(at center, rgba(72, 0, 103, 0.8), rgba(0, 0, 0, 0.8)), url('tu-imagen-de-fondo.jpg')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div className="section-head mb-30 text-center">
          <h3 className="text-white text-uppercase ">
            Nuestro equipo elabora la redacción de cada palabra y párrafo con el
            enfoque preciso para que la marca hable
          </h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content">
              <div className="row gx-5">
                {firstBlog.map((blog, index) => (
                  <div className="col-lg-6 border-end brd-light" key={index}>
                    <div className="card border-0 bg-transparent rounded-0 text-white mb-4 mb-lg-0">
                      <div className="img">
                        <img
                          src={blog.cover}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body px-0">
                        <h4 className="fw-normal text-white mt-2">
                          <Link href="/page-single-post-5">
                            <a>{blog.title}</a>
                          </Link>
                        </h4>
                        <p className="small mt-2 op-8">{blog.short_desc}</p>
                        <div className="d-flex small mt-30 align-items-center justify-content-between op-9">
                          <div className="l_side d-flex align-items-center">
                            <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2">
                              {blog.placeholderImageText}
                            </span>
                            <a href="#" className="mt-1">
                              By {blog.author}
                            </a>
                          </div>
                          <div className="r-side mt-1">
                            <i className="bi bi-chat-left-text me-1"></i>
                            <a href="#">{blog.comments}</a>
                            <i className="bi bi-eye ms-4 me-1"></i>
                            <a href="#">{blog.views}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-lg-6 pt-50">
                  <div className="section-head style-4">
                    <h3
                      className="mb-30"
                      style={{ color: "white", textAlign: "center" }}
                    >
                      SU MARCA A TRAVÉS DE UN PLAN
                    </h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      1) MEJORARÁ LA COMUNICACIÓN ACTIVA EN REDES SOCIALES
                    </li>
                    <br></br>
                    <li>2) ELEVARÁ SU REPUTACIÓN EN GOOGLE</li>
                    <br></br>
                    <li>3) TENDRÁ ACTUALIZADA LA WEB DE VENTA EN LÍNEA</li>
                    <br></br>
                    <li>
                      4) MEJORARÁ LA IMAGEN Y PRESENTACIÓN A SUS CONSUMIDORES
                    </li>
                    <br></br>
                    <li>5) CREARÁ NUEVAS OPORTUNIDADES DE NEGOCIO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

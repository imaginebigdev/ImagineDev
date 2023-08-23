import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <header className="style-2 overflow-hidden" data-scroll-index="1">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 justify-content-center">
            <div className="img mb-4 mb-lg-0 wow fadeIn">
              <img src="/assets/img/header/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="content text-center text-light text-capitalize">
              <div className="top_info pb-100">
                <a
                  href="https://www.youtube.com/watch?v=dF2M_dreLeQ"
                  className="vid-btn"
                  onClick={openVideo}
                >
                  <i className="bi bi-play-fill wow heartBeat infinite slower"></i>
                </a>
              </div>
              <br></br>
              <h4>
                Awaken the Power of Your Brand Through the Magic of Digital
                Connections
              </h4>
              <p className="d-block mt-40">
                In this vast digital world, where voices intertwine and stories
                come to life, there's a place where your brand can shine with
                its own light. A place where communities not only become
                familiar with your products or services, but also embrace your
                essence with passion and authenticity.
              </p>
              <p className="d-block mt-40">
                Welcome to a universe of genuine conversations, where each word
                forms a bond, each interaction builds a bridge, and each
                experience creates a connection. Here, at the heart of social
                networks and digital communities, a story is born that belongs
                to you, but also to those who live it with excitement.
              </p>
              <Link href="/contact">
                <a className="btn sm-butn border text-white radius-9 mt-60 hover-darkBlue">
                  <span style={{ color: "#fff" }}>Learn more about us</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="dF2M_dreLeQ"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

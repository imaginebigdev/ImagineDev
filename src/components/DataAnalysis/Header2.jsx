import Navbar2 from "@components/Navbars/Fullstack";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header2 = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <header className="style-8 bg-gray2" id="inicio">
      <div className="container">
        <div className="content section-padding">
          <div className="row align-items-center gx-0">
            <div className="col-lg-6">
              <div className="info">
                <h1 className="wow fadeInUp">
                  Curso FullStack <br />
                  <h3>
                    Aprende desarrollo web completo en 6 meses con el stack{" "}
                    <span style={{ color: "#3a9fe3ff" }}> MERN </span>
                  </h3>
                </h1>
                <img src="/assets/img/digitalwork1.png" alt="" />
                {/* <div className="form wow fadeInUp">
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img src="/assets/img/fullstack1.png" alt="img" />
              </div>
            </div>
            {/*  <div className="col-lg-6">
              <div className="img mt-4 mt-lg-0 wow fadeIn">
                <img src="/assets/img/about/about1.png" alt="" />
              </div> 
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;

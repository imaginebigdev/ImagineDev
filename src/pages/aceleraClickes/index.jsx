import { useEffect, useRef } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "@layouts/Main";
//= Components

import About2 from "@components/ITCreative/About2";
import Modulo1 from "@components/ITCreative/Modulo1";
import Modulo2 from "@components/ITCreative/Modulo2";
import Modulo3 from "@components/ITCreative/Modulo3";
import Navbar from "@components/Navbars/AppNav";
import navbarScrollEffect from "@common/navbarScrollEffect";
import Modulo4 from "@components/ITCreative/Modulo4";
import Modulo5 from "@components/ITCreative/Modulo5";
import Modulo6 from "@components/ITCreative/Modulo6";
import Modulo7 from "@components/ITCreative/Modulo7";
import Modulo8 from "@components/ITCreative/Modulo8";
import Footer from "@components/App/Footer2";
import PlanE from "@components/ITCreative/PlanE";
import ServicesE from "@components/IT/ServicesE";
import Header from "@components/IT/Header";
import Blog from "@components/IT/Blog";
import ReviewsE from "@components/IT/ReviewsE";
import Community2E from "@components/App/Community2E";
import ChooseUs2E from "@components/IT/ChooseUs2E";
import Footer2 from "@components/App/Footer2";
import NavbarClick from "@components/Navbars/AppNav/NavClick";
import NavbarEs from "@components/Navbars/AppNav/AppNavEs";
import HeaderE from "@components/IT/HeaderE";

const FullStack = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("home-style-8");
    navbarScrollEffect(navbarRef.current);

    return () => document.body.classList.remove("home-style-8");
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Imagine Big - AceleraClick</title>
      </Head>

      <MainLayout>
        <NavbarEs navbarRef={navbarRef} />
        {/* <Header2 /> */}
        <HeaderE />

        <main>
          <ServicesE />
          {/* <About2 /> */}

          <ReviewsE />
          {/* <Modulo6 /> */}

          {/* <Blog /> */}
          {/*   <br></br> */}

          <ChooseUs2E />
          <PlanE />

          {/* <ChooseUs2 /> */}
          {/* <Modulo1 />
          <br></br>
          <Modulo2 />
          <br></br>
          <Modulo3 />
          <br></br>
          <Modulo5 />
          <br></br>
          <Modulo4 />
          <br></br>
          <Modulo7 />
          <br></br>
          <Modulo8 /> */}
          <Community2E />
          <Footer2 />
        </main>
      </MainLayout>
    </>
  );
};

export default FullStack;

import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import Team from "@components/App/Team";
import NavbarEs from "@components/Navbars/AppNav/AppNavEs";
import AboutEs from "@components/CloudHosting/AboutEs";
import ChooseUsEsp from "@components/IT/ChooseUsEsp";
import FooterEsp from "@components/App/FooterEsp";

const PageAboutApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Imagine Big - Nosotros</title>
      </Head>

      <MainLayout>
        <NavbarEs navbarRef={navbarRef} />
        <main className="about-page style-5">
          <AboutEs />
          <ChooseUsEsp />
          <Team />
          {/* <Culture /> */}
        </main>
        <FooterEsp noWave />
      </MainLayout>
    </>
  );
};

export default PageAboutApp;

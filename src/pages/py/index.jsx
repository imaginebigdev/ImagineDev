import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components

import NavbarEs from "@components/Navbars/AppNav/AppNavEs";

import About from "@components/App/About-esp";
import Screenshots from "@components/App/Screenshots";
import HeaderEsp from "@components/App/HeaderEsp";
import ClientsEsp from "@components/App/ClientsEsp";
import FAQEs from "@components/App/FAQEs";
import CommunityEsp from "@components/App/CommunityEsp";
import FooterEsp from "@components/App/FooterEsp";
import Navbarpy from "@components/Navbars/AppNav/AppNavPy";
import FooterPy from "@components/App/FooterPy";

const HomeAppLanding = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Imagine Big</title>
      </Head>

      <MainLayout>
        <Navbarpy navbarRef={navbarRef} />
        <HeaderEsp />
        <main>
          <About />
          <ClientsEsp />
          <Screenshots />
          <FAQEs />
          <CommunityEsp />
        </main>
        <FooterPy />
      </MainLayout>
    </>
  );
};

export default HomeAppLanding;

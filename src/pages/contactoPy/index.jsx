import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
import Community from "@components/Contact/Community";
import Form from "@components/Contact/Form";
import Map from "@components/Contact/Map";
import Footer from "@components/App/Footer2";
import NavbarEs from "@components/Navbars/AppNav/AppNavEs";

import FormEsp from "@components/Contact/FormEsp";
import CommunityEs from "@components/Contact/CommunityEsp";
import FooterEsp from "@components/App/FooterEsp";
import Navbarpy from "@components/Navbars/AppNav/AppNavPy";
import FooterPy from "@components/App/FooterPy";
import CommunityPy from "@components/Contact/communityPy";
import MapPy from "@components/Contact/MapPy";

const PageContactApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Imagine Big - Contacto</title>
      </Head>

      <MainLayout>
        <Navbarpy navbarRef={navbarRef} />
        <main className="contact-page style-5">
          <CommunityPy />
          <FormEsp />
          <MapPy />
        </main>
        <FooterPy noWave />
      </MainLayout>
    </>
  );
};

export default PageContactApp;

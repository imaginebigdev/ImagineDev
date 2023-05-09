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
import Footer from "@components/App/Footer";
import NavbarEs from "@components/Navbars/AppNav/AppNavEs";

import FormEsp from "@components/Contact/FormEsp";
import CommunityEs from "@components/Contact/CommunityEsp";
import FooterEsp from "@components/App/FooterEsp";

const PageContactApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Imagine Big - Contact</title>
      </Head>

      <MainLayout>
        <NavbarEs navbarRef={navbarRef} />
        <main className="contact-page style-5">
          <CommunityEs />
          <FormEsp />
          <Map />
        </main>
        <FooterEsp noWave />
      </MainLayout>
    </>
  );
};

export default PageContactApp;

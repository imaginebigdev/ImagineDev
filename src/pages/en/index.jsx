import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components

import Navbar from "@components/Navbars/AppNav";
import Header from "@components/Software/Header";
import About from "@components/App/About";
import Clients from "@components/App/Clients";
import Screenshots from "@components/App/Screenshots";
import FAQ from "@components/App/FAQ";
import Community from "@components/App/Community";
import Footer from "@components/App/Footer";

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
        <Navbar navbarRef={navbarRef} />
        <Header />
        <main>
          <About />
          <Clients />
          <Screenshots />
          <FAQ />
          <Community />
        </main>
        <Footer />
      </MainLayout>
    </>
  );
};

export default HomeAppLanding;

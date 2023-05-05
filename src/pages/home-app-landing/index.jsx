import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
import Header from "@components/Software/Header";
import Clients from "@components/App/Clients";
import Features from "@components/App/Features";
import About from "@components/App/About";
import Screenshots from "@components/App/Screenshots";
import Testimonials from "@components/App/Testimonials";
import Pricing from "@components/App/Pricing";
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
          <Screenshots />
          <Clients />
          <FAQ />
          <Community />
        </main>
        <Footer />
      </MainLayout>
    </>
  );
};

export default HomeAppLanding;

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
        <Navbar navbarRef={navbarRef} />
        <main className="contact-page style-5">
          <Community />
          <Form />
          <Map />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  );
};

export default PageContactApp;

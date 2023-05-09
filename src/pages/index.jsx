import { useEffect } from "react";
import HomeAppLanding from "./en";

const LandingPreview = () => {
  useEffect(() => {
    document.body.classList.add("index-main");
    return () => document.body.classList.remove("index-main");
  }, []);

  return (
    <>
      <HomeAppLanding />
    </>
  );
};

export default LandingPreview;

import aboutDataRTL from "@data/App/about-rtl.json";
import SecondContentEsp from "./SecondContentEsp";
import ThirdContentEsp from "./ThirdContentEsp";
import IntegrationEsp from "./IntegrationEsp";
import FirstContentEsp from "./FirstContentEsp";

const AboutEsp = ({ noFirstContent, noIntegration, noWave }) => {
  const data = aboutDataRTL;

  return (
    <section className={`about ${noWave ? "" : "section-padding"} style-4`}>
      {!noFirstContent && <FirstContentEsp desarrollo={data.desarrollo} />}
      <SecondContentEsp viralizacion={data.viralizacion} />
      <ThirdContentEsp marketing={data.marketing} />
      {!noIntegration && <IntegrationEsp integrations={data.integrations} />}
      {!noWave && (
        <>
          <img
            src="/assets/img/about/about_s4_wave.png"
            alt=""
            className="top-wave"
          />
          <img
            src="/assets/img/about/about_s4_wave.png"
            alt=""
            className="bottom-wave"
          />
        </>
      )}
    </section>
  );
};

export default AboutEsp;

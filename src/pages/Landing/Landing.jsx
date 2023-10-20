import React from "react";
import Header from "../../components/Header/Header";
import MediaTextBlock from "./components/MediaTextBlock/MediaTextBlock";
import Hero from "./components/Hero/Hero";
import FeatureIcons from "./components/FeatureIcons/FeatureIcons";
import ImageBackgroundBlock from "./components/ImageBackgroundBlock/ImageBackgroundBlock";
import UseCases from "./components/UseCases/UseCases";
import Footer from "../../components/Footer/Footer";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Fade bottom>
        <MediaTextBlock />
      </Fade>
      <Slide left>
        <FeatureIcons />
      </Slide>
      <Slide right>
        <ImageBackgroundBlock />
      </Slide>
      <Fade bottom>
        <UseCases />
      </Fade>
      <Footer />
    </>
  );
};

export default Landing;

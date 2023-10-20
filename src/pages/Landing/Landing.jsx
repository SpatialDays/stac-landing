import Header from "../../components/Header/Header";
import MediaTextBlock from "./components/MediaTextBlock/MediaTextBlock";
import Hero from "./components/Hero/Hero";
import FeatureIcons from "./components/FeatureIcons/FeatureIcons";
import ImageBackgroundBlock from "./components/ImageBackgroundBlock/ImageBackgroundBlock";
import UseCases from "./components/UseCases/UseCases";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <MediaTextBlock />
      <FeatureIcons />
      <ImageBackgroundBlock />
      <UseCases />
      <Footer />
    </>
  );
};

export default Landing;

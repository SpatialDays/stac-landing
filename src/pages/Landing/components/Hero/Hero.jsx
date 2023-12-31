import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.scss";
import { Tooltip } from "react-tooltip";

const Hero = ({ openModal }) => {
  const images = [
    "/hero/optimised/2.jpg",
    "/hero/optimised/3.jpg",
    "/hero/optimised/4.jpg",
    "/hero/optimised/5.jpg",
    "/hero/optimised/6.jpg",
    "/hero/optimised/1.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(-1);

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Create your imagery catalogue",
        "Find the imagery you need",
        "Download the imagery you want",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2500,
      loop: true,
      loopCount: Infinity,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Destroy Typed instance to prevent memory leaks
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, images]);

  return (
    <>
      <div className="hero">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Satellite View"
            className={`hero__image ${
              index === currentImageIndex ? "active" : ""
            } ${index === previousImageIndex ? "previous" : ""}`}
          />
        ))}
        <div className="hero__content">
          <h1 className="hero__title">
            <span ref={typedRef}></span>
          </h1>
          <p className="hero__description">
            A STAC-based Portal to easily search, view and download imagery data
            for further analysis or processing
          </p>
          <button className="hero__button" onClick={openModal}>
            Try it out
          </button>
          <Tooltip anchorSelect=".hero__button" place="right" type="dark">
            Start a conversation
          </Tooltip>
        </div>
      </div>

      <div className="logo-container">
        <img src="hero/logo.jpeg" alt="STAC Logo" className="hero__logo" />
      </div>
    </>
  );
};

export default Hero;

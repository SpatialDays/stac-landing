import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.scss";

const Hero = () => {
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
    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    const options = {
      strings: [
        "Unlock Earth&apos;s Stories with STAC",
        "Discover the World with Us",
        "Harness the Power of Satellite Data",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      clearInterval(interval);
      typed.destroy(); // Destroy Typed instance to prevent memory leaks
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
            Your portal to easily index, discover, and harness satellite data
            for meaningful insights.
          </p>
          <button className="hero__button">Request Access</button>
        </div>
      </div>

      <div className="logo-container">
        <img src="hero/logo.jpeg" alt="STAC Logo" className="hero__logo" />
      </div>
    </>
  );
};

export default Hero;

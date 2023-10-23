import React from "react";
import {
  FaMobileAlt,
  FaEye,
  FaBlog,
  FaWrench,
  FaCode,
  FaChrome,
  FaBookOpen,
  FaArrowUp,
} from "react-icons/fa";
import "./Features.scss";

const Features = () => {
  const featuresData = [
    {
      title: "Full Responsive",
      description: "Adjustable on smartphones and tablets",
      icon: <FaMobileAlt />,
    },
    {
      title: "Retina Ready",
      description: "Retina display graphics",
      icon: <FaEye />,
    },
    {
      title: "Blog Layout",
      description: "Blog style layout",
      icon: <FaBlog />,
    },
    {
      title: "Easy to Customize",
      description: "Easy customizability",
      icon: <FaWrench />,
    },
    {
      title: "Clean Code",
      description: "Clean code",
      icon: <FaCode />,
    },
    {
      title: "Browser Compatibility",
      description: "Browser compatibility",
      icon: <FaChrome />,
    },
    {
      title: "Well Documented",
      description: "Well documented",
      icon: <FaBookOpen />,
    },
    {
      title: "Free Updates",
      description: "Free updates",
      icon: <FaArrowUp />,
    },
    
  ];

  return (
    <div className="features-container">
      <h2>Key Features</h2>
      <div className="features">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-box">
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

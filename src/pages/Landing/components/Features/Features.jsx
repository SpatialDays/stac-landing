import React from "react";
import {
  FaMobileAlt,
  FaTools,
  FaCheckCircle,
  FaLock,
  FaUserCircle,
  FaUpload,
  FaCloud,
  FaSatelliteDish,
} from "react-icons/fa";
import "./Features.scss";

const Features = () => {
  const featuresData = [
    {
      title: "Fully Responsive",
      description: "Usable on smartphones and tablets",
      icon: <FaMobileAlt />,
    },
    {
      title: "Easy to Customise",
      description: "Modular approach makes customisation easy",
      icon: <FaTools />,
    },
    {
      title: "Comprehensive",
      description: "Has all required tools for data management",
      icon: <FaCheckCircle />,
    },
    {
      title: "Secure",
      description: "SSL-enabled with Single-Sign-On (Active Directory)",
      icon: <FaLock />,
    },
    {
      title: "Role-Based Access Control",
      description: 'Supports “Viewer”, “Creator” and “Admin” User Roles',
      icon: <FaUserCircle />,
    },
    {
      title: "Bulk Upload",
      description: "Support for bulk upload of even large imagery archives",
      icon: <FaUpload />,
    },
    {
      title: "Cloud-Hosted",
      description: "Resilient and easily scalable and extensible",
      icon: <FaCloud />,
    },
    {
      title: "Data Types",
      description: "Satellite imagery, aerial photography, DTM/DSM, Point Cloud data all supported through bespoke parsers",
      icon: <FaSatelliteDish />,
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

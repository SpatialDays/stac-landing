import "./FeatureIcons.scss";

const FeatureIcons = () => {
  const features = [
    {
      icon: "/icons/globe.svg",
      title: "Portal",
      description:
        "Explore our interactive portal. Our user-friendly interface allows you to easily browse and discover satellite imagery for your projects.",
    },
    {
      icon: "/icons/database.svg",
      title: "Data",
      description:
        "Access high-quality satellite data. Our vast database encompasses regions across the globe, ensuring accurate and comprehensive coverage for your projects.",
    },
    {
      icon: "/icons/code.svg",
      title: "API",
      description:
        "Easily integrate with our robust API. Designed for developers, our interface ensures seamless communication and data retrieval for your applications.",
    },
    {
      icon: "/icons/tools.svg",
      title: "Tools",
      description:
        "Utilize powerful analytical tools. From basic visualization to advanced predictive analysis, our toolkit empowers you to derive meaningful insights.",
    },
  ];

  return (
    <div className="feature-icons__outer">
      <div className="feature-icons">
        {features.map((feature, index) => (
          <div key={index} className="feature-icons__item">
            <img
              src={feature.icon}
              alt={feature.title}
              className="feature-icons__icon"
            />
            <h3 className="feature-icons__title">{feature.title}</h3>
            <p className="feature-icons__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureIcons;

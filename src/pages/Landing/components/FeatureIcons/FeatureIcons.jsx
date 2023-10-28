import "./FeatureIcons.scss";

const FeatureIcons = () => {
  const features = [
    {
      icon: "/icons/globe.svg",
      title: "Portal",
      description:
        "Explore your imagery archive using our interactive Portal,  Our user-friendly interface allows you to easily browse and search for imagery for your project.",
    },
    {
      icon: "/icons/database.svg",
      title: "Data",
      description:
        "Index your satellite imagery, aerial photography imagery or DTM/DSM imagery to create your own searchable Catalogue.",
    },
    {
      icon: "/icons/code.svg",
      title: "API",
      description:
        "Use our fully-functional API for programmatic access to your imagery for all your applications.",
    },
    {
      icon: "/icons/tools.svg",
      title: "Tools",
      description:
        "Use our data management tools, search tools, map tools, and download tools to manage, find, view and download your imagery.",
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

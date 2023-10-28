import "./UseCases.scss";

const UseCases = () => {
  const cases = [
    {
      image: "/images/usgs-1.jpg",
      title: "Coastal Erosion Analysis",
      description:
        "Analyzing shorelines to understand and predict erosion patterns, ensuring the safety of coastal structures.",
    },
    {
      image: "/images/usgs-2.jpg",
      title: "Forest Density Mapping",
      description:
        "Utilizing satellite imagery to monitor and report on forest health and density.",
    },
    {
      image: "/images/usgs-3.jpg",
      title: "Urban Development Tracking",
      description:
        "Mapping urban sprawl, infrastructure changes, and evaluating their impact on the surrounding environment.",
    },
  ];

  return (
    <div className="use-cases">
      <h2 className="use-cases__description">
      Enable real-world applications of geospatial and earth observation data.
      </h2>
      <div className="use-cases__grid">
        {cases.map((useCase, index) => (
          <div key={index} className="use-case">
            <img
              src={useCase.image}
              alt={useCase.title}
              className="use-case__image"
            />
            <h3 className="use-case__title">{useCase.title}</h3>
            <p className="use-case__description">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;

import './FeatureIcons.scss';

const FeatureIcons = () => {
  const features = [
    {
      icon: '/icons/code.svg',
      title: 'API',
      description: 'Easily integrate with our robust API. Designed for developers, our interface ensures seamless communication and data retrieval for your applications.'
    },
    {
      icon: '/icons/database.svg',
      title: 'Data',
      description: 'Access high-quality satellite data. Our vast database encompasses regions across the globe, ensuring accurate and comprehensive coverage for your projects.'
    },
    {
      icon: '/icons/tools.svg',
      title: 'Tools',
      description: 'Utilize powerful analytical tools. From basic visualization to advanced predictive analysis, our toolkit empowers you to derive meaningful insights.'
    },
    {
      icon: '/icons/support.svg',
      title: 'Support',
      description: '24/7 customer support. Our dedicated team is always ready to assist, ensuring your projects run smoothly without any hitches.'
    },
];


  return (
    <div className="feature-icons__outer">
      <div className="feature-icons">
        {features.map((feature, index) => (
          <div key={index} className="feature-icons__item">
            <img src={feature.icon} alt={feature.title} className="feature-icons__icon" />
            <h3 className="feature-icons__title">{feature.title}</h3>
            <p className="feature-icons__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureIcons;

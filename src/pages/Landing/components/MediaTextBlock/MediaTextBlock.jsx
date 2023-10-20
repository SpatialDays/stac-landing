import './MediaTextBlock.scss';

const MediaTextBlock = () => {
  return (
    <div className="media-text-block__outer">
      <div className={`media-text-block image-right`}>
        <div className="media-text-block__image-container">
          <img src={'/images/analysis.png'} alt={'screen of portal'} className="media-text-block__image" />
        </div>
        <div className="media-text-block__text-container">
          <h2 className="media-text-block__title">Leading Provider of Global STAC</h2>
          <p className="media-text-block__description">
            As pioneers in the satellite data landscape, we have honed our expertise 
            in providing comprehensive STAC solutions that empower businesses and researchers. 
            Our cutting-edge technology and data-driven insights have continually set industry standards.
          </p>
          <button className="media-text-block__button">Find out more</button>
        </div>
      </div>
    </div>
  );
}

export default MediaTextBlock;

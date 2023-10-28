import "./MediaTextBlock.scss";

const MediaTextBlock = () => {
  return (
    <div className="media-text-block__outer">
      <div className={`media-text-block image-right`}>
        <div className="media-text-block__image-container">
          <img
            src={"/images/analysis.webp"}
            alt={"screen of portal"}
            className="media-text-block__image"
          />
        </div>
        <div className="media-text-block__text-container">
          <h2 className="media-text-block__title">Imagery Archive Solution</h2>
          <p className="media-text-block__description">
            Manage your imagery archive using our intuitive and user-friendly
            STAC Portal and API. Managed SaaS service or self-hosted options
            available.
          </p>
          <a href="/about">
            <button className="media-text-block__button">Find out more</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaTextBlock;

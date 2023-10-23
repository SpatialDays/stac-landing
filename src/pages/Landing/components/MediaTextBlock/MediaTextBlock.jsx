import "./MediaTextBlock.scss";

const MediaTextBlock = () => {
  return (
    <div className="media-text-block__outer">
      <div className={`media-text-block image-right`}>
        <div className="media-text-block__image-container">
          <img
            src={"/images/analysis.png"}
            alt={"screen of portal"}
            className="media-text-block__image"
          />
        </div>
        <div className="media-text-block__text-container">
          <h2 className="media-text-block__title">STAC Portal Developers</h2>
          <p className="media-text-block__description">
            We developed an intuitive and user-friendly STAC Portal and
            associated STAC API to help users manage their imagery data archive.
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

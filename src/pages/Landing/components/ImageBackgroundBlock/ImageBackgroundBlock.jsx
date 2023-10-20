import "./ImageBackgroundBlock.scss";

const ImageBackgroundBlock = () => {
  return (
    <div
      className="image-background-block"
      style={{ backgroundImage: `url(/hero/night.png)` }}
    >
      <div className="image-background-block__content">
        <h1 className="image-background-block__title">
          High Frequency Geospatial Data
        </h1>
        <p className="image-background-block__description">
          Our platform offers high-frequency geospatial data that empowers
          businesses, researchers, and developers. This wealth of information
          propels innovative solutions, fosters informed decision-making, and
          creates unparalleled opportunities for various sectors. Experience the
          future of geospatial analytics with us.
        </p>
      </div>
    </div>
  );
};

export default ImageBackgroundBlock;

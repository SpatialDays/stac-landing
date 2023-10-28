import "./ImageBackgroundBlock.scss";

const ImageBackgroundBlock = () => {
  return (
    <div
      className="image-background-block"
      style={{ backgroundImage: `url(/hero/night.png)` }}
    >
      <div className="image-background-block__content">
        <h1 className="image-background-block__title">Empower your users</h1>
        <p className="image-background-block__description">
          Enable your users to focus on real-world applications of imagery data
          rather than wasting time on imagery data management, storage and
          indexing.
        </p>
      </div>
    </div>
  );
};

export default ImageBackgroundBlock;

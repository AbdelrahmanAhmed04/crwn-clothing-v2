import "./category-container.styles.scss";

const CategoryContainer = (props) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{props.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryContainer;

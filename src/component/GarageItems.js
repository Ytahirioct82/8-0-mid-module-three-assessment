const GarageItems = (props) => {
  const { img, name, price, description, id } = props.product;

  return (
    <div className="products" id={id}>
      <h3>{name}</h3>
      <div>Price: {"$" + price.toFixed(2)} </div>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>{description}</div>
      <button type="submit" onClick={() => props.handleProductClick(props.product)}>
        {" "}
        Add To Cart
      </button>
    </div>
  );
};

export default GarageItems;

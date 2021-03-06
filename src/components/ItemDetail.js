const ItemDetail = (props) => {
  const { title, price, description, stock, image } = props.item;
  return (
    <div className="flex bg-danger">
      <h3>ItemDetail</h3>
      <h3>{title}</h3>
      <h2>{price}</h2>
      <p>{description}</p>
      <p>{stock}</p>
      <img src={`${image}`} alt={`${image}`}></img>
    </div>
  );
};
export default ItemDetail;

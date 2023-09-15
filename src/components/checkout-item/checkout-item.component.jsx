import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const handleIncrease = () => addItemToCart(cartItem);
  const handleDecrease = () => removeItemFromCart(cartItem);
  const handleDelete = () => deleteItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <span onClick={handleDecrease} className="arrow">
          &lt;
        </span>
        <span className="value">{quantity}</span>
        <span onClick={handleIncrease} className="arrow">
          {" "}
          &gt;
        </span>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleDelete}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;

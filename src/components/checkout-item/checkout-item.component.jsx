import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <img src={imageUrl} alt="" />
      <h2>{name}</h2>
      <div className="quantity">
        <span onClick={() => removeItemFromCart(cartItem)} className="increase">
          &lt;
        </span>
        <span className="quantity"> {quantity} </span>
        <span onClick={() => addItemToCart(cartItem)} className="decrease">
          &gt;
        </span>
      </div>
      <span className="price">{price}</span>
      <span onClick={() => deleteItemFromCart(cartItem)} className="remove">
        x
      </span>
    </div>
  );
};

export default CheckoutItem;

import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <CheckoutItems />
      <span className="total">Total:{total}</span>
    </div>
  );
};

export default Checkout;

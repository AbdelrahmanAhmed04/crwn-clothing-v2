import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
const CheckoutItems = () => {
  const { cartItems } = useContext(CartContext);

  return cartItems.map((item) => {
    return <CheckoutItem cartItem={item} key={item.id} />;
  });
};

export default CheckoutItems;

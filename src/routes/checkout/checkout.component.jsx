import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      <CheckoutItems />
      <Total>Total:{total}$</Total>
    </CheckoutContainer>
  );
};

export default Checkout;

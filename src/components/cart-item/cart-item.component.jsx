import { CartItemContainer, ItemDetals } from "./cart-item.styles";
const CartItem = ({ CartItem }) => {
  const { name, quantity, price, imageUrl } = CartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetals>
        <span>{name}</span>
        <span>
          {quantity} × {price}$
        </span>
      </ItemDetals>
    </CartItemContainer>
  );
};

export default CartItem;

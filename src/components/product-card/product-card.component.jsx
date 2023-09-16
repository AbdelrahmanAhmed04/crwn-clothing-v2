import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const handleAddToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img alt="Product illustration" src={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={handleAddToCart} buttonType="inverted">
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

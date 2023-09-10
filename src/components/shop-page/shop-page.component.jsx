import "./shop-page.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/shop.context";

const ShopPage = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-continer">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
      ;
    </div>
  );
};

export default ShopPage;

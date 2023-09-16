import { Route, Routes } from "react-router-dom";
import CategriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

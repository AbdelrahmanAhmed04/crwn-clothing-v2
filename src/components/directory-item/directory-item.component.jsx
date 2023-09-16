import { useNavigate } from "react-router-dom";
import {
  CategoryContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";
const DirectoryItem = (props) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/shop/${props.title}`);
  };
  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={props.imageUrl} />
      <Body onClick={navigateHandler}>
        <h2>{props.title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default DirectoryItem;

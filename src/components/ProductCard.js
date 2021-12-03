import { ProductCardTemp } from "../styles/styledComp";

const ProductCard = ({
  props: { image, productRating, productName, retailPrice },
}) => {
  return (
    <ProductCardTemp>
      <div className="img-cont">
        <img src={image[0]} alt="" />
      </div>
      <h3>{productName}</h3>
      <div className="score">
        <img src="" alt="" />
        <p>{productRating}</p>
      </div>
      <p>{retailPrice}</p>
    </ProductCardTemp>
  );
};

export default ProductCard;

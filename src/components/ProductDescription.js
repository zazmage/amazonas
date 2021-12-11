import { useDispatch } from "react-redux";
import { addData } from "../store/slices/cart";
import { ProductDescCont } from "../styles/styledComp";

const ProductDescription = ({
  props: {
    brand,
    description,
    discountedPrice,
    overallRating,
    productName,
    retailPrice,
  },
  props,
}) => {
  const dispatch = useDispatch();
  return (
    <ProductDescCont>
      <h2>{productName}</h2>
      <p>{brand}</p>
      <p>{overallRating}</p>
      <p>{discountedPrice}</p>
      <p>{retailPrice}</p>
      <p>{description}</p>
      <button onClick={() => dispatch(addData(props))}>
        Agregar al carrito
      </button>
    </ProductDescCont>
  );
};

export default ProductDescription;

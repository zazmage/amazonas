import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../store/slices/database";
import { Spinner } from "../styles/spinnerStyleComp";
import { ProductListTemp } from "../styles/styledComp";
import ProductCard from "./ProductCard";

const ProductDesList = ({ props: { brand } }) => {
  const { data } = useSelector((state) => state.database);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data === null) dispatch(getData());
  }, [dispatch, data]);

  return (
    <ProductListTemp>
      {data === null ? (
        <Spinner />
      ) : (
        data
          .filter((el) => el.brand === brand)
          .map((el) => (
            <Link key={el.uniqId} to={`/productInfo/${el.productName}`}>
              <ProductCard props={el} />
            </Link>
          ))
      )}
    </ProductListTemp>
  );
};

export default ProductDesList;

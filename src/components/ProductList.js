import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../styles/spinnerStyleComp";
import { ProductListTemp } from "../styles/styledComp";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getData } from "../store/slices/database";

const ProductList = () => {
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
        data.map((el) => (
          <Link key={el.uniqId} to={`/productInfo/${el.productName}`}>
            <ProductCard props={el} />
          </Link>
        ))
      )}
    </ProductListTemp>
  );
};

export default ProductList;

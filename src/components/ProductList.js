import { useSelector } from "react-redux";
import { Spinner } from "../styles/spinnerStyleComp";
import { ProductListTemp } from "../styles/styledComp";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { data } = useSelector((state) => state.database);

  console.log(data);
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

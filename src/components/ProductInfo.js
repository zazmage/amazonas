import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../store/slices/database";
import NavBar from "./NavBar";
import ProductImages from "./ProductImages";
import { Spinner } from "../styles/spinnerStyleComp";
import ProductDescription from "./ProductDescription";
import { ProductInfoCont } from "../styles/styledComp";
import ProductDesList from "./ProductDesList";

const ProductInfo = () => {
  const { productName } = useParams();
  const { data } = useSelector((state) => state.database);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data === null) dispatch(getData());
  }, [dispatch, data]);

  return (
    <div>
      <NavBar />
      {data === null ? (
        <Spinner />
      ) : (
        <ProductInfoCont>
          <ProductImages
            props={data.find((el) => el.productName === productName)}
          />
          <ProductDescription
            props={data.find((el) => el.productName === productName)}
          />
          <ProductDesList
            props={data.find((el) => el.productName === productName)}
          />
        </ProductInfoCont>
      )}
    </div>
  );
};

export default ProductInfo;

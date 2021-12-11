import { useSelector } from "react-redux";
import { ProductListTemp } from "../styles/styledComp";
import ProductCard from "./ProductCard";

const ShoppingCartProducts = () => {
  const { dataShoppCart } = useSelector((state) => state.shoppingCart);

  return (
    <ProductListTemp>
      {dataShoppCart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        dataShoppCart.map((el, index) => <ProductCard key={index} props={el} />)
      )}
    </ProductListTemp>
  );
};

export default ShoppingCartProducts;

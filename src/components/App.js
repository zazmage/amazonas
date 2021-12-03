import {
  Outlet,
  NavLink,
  useSearchParams,
  Link,
  useLocation,
} from "react-router-dom";
import NavBar from "./NavBar";
import ProductList from "./ProductList";

import { useEffect } from "react";
import { getData } from "../store/slices/database";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { data } = useSelector((state) => state.database);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  console.log(data);

  return (
    <div>
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;

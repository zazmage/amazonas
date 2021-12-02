import {
  Outlet,
  NavLink,
  useSearchParams,
  Link,
  useLocation,
} from "react-router-dom";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect } from "react";
import { GlobalStyle } from "../styles/styledComp";

function App() {
  /* useEffect(() => {
    const obtenerDatos = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      //console.log(querySnapshot.docs[0].data());
    };
    obtenerDatos();
  }, []); */
  return (
    <div>
      <GlobalStyle />

      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;

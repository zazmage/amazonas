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
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;

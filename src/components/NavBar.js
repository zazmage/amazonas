import { NavigationBar } from "../styles/styledComp";
import searchIcon from "../assets/search.svg";
import shoppingCartIcon from "../assets/shopping-cart.svg";
import {
  Outlet,
  NavLink,
  useSearchParams,
  Link,
  useLocation,
} from "react-router-dom";

const NavBar = () => {
  return (
    <NavigationBar>
      <Link to="/">
        <h1>Amazonas</h1>
      </Link>
      <div>
        <input />
        <div>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <Link to="/login">
        <p id="identify-btn">Identifícate</p>
      </Link>
      <Link to="/shopping">
        <p id="shopping-cart-btn">Carrito</p>
      </Link>
    </NavigationBar>
  );
};

export default NavBar;

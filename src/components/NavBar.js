import { NavigationBar } from "../styles/styledComp";
import searchIcon from "../assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
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
      {auth ? (
        <p id="identify-btn" name="logout" onClick={(e) => logout(navigate)}>
          Cerrar sesión
        </p>
      ) : (
        <Link to="/login">
          <p id="identify-btn">Identifícate</p>
        </Link>
      )}

      <Link to="/shopping">
        <p id="shopping-cart-btn">Carrito</p>
      </Link>
    </NavigationBar>
  );
};

export default NavBar;

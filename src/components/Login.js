import { Link } from "react-router-dom";

import { FormContainer, LoginView } from "../styles/styledComp";

const Login = () => {
  return (
    <FormContainer>
      <h2>
        <Link to="/">Amazonas</Link>
      </h2>
      <div>
        <h3>Iniciar sesión</h3>
        <form>
          <label>
            <p>Dirección de correo electrónico</p>
            <input />
          </label>
          <label>
            <p>Contraseña</p>
            <input />
          </label>
          <button>Continuar</button>
        </form>
      </div>
      <p>¿Eres nuevo en amazonas?</p>
      <Link to="/register">
        <button>Crea tu cuenta de Amazonas</button>
      </Link>
    </FormContainer>
  );
};

export default Login;

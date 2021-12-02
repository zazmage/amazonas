import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { FormContainer, LoginView } from "../styles/styledComp";
import googleIcon from "../assets/btn_google_light_normal_ios.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  const { form, handleChange } = useForm();
  const navigate = useNavigate();
  // console.log(navigate);
  return (
    <FormContainer>
      <h2>
        <Link to="/">Amazonas</Link>
      </h2>
      <div>
        <h3>Iniciar sesión</h3>
        <form id="login-form" onSubmit={(e) => handleAuth(e, form, navigate)}>
          <label>
            <p>Dirección de correo electrónico</p>
            <input onChange={handleChange} name="email" />
          </label>
          <label>
            <p>Contraseña</p>
            <input
              /* type="password" */ onChange={handleChange}
              name="password"
            />
          </label>
          <button>Continuar</button>
        </form>
        <img
          id="login-google"
          onClick={(e) => {
            //console.log(navigate);
            return handleAuth(e, form, navigate);
          }}
          src={googleIcon}
          alt="Login with google"
        />
      </div>
      <p>¿Eres nuevo en amazonas?</p>
      <Link to="/register">
        <button>Crea tu cuenta de Amazonas</button>
      </Link>
    </FormContainer>
  );
};

export default Login;

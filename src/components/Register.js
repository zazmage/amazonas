import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { FormContainer } from "../styles/styledComp";

const Register = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  const { form, handleChange } = useForm();
  return (
    <FormContainer>
      <h2>
        <Link to="/">Amazonas</Link>
      </h2>
      <div>
        <h3>Crear cuenta</h3>
        <p>Formulario</p>
        <form id="register-form" onSubmit={(e) => handleAuth(e, form)}>
          <label>
            <p>Dirección de correo electrónico</p>
            <input onChange={handleChange} name="email" />
          </label>
          <label>
            <p>Contraseña</p>
            <input onChange={handleChange} name="password" />
          </label>
          <label>
            <p>Vuelve a escribir la contraseña</p>
            <input onChange={handleChange} name="secPassword" />
          </label>
          <button>Continuar</button>
        </form>
      </div>
      <p>¿Eres nuevo en amazonas?</p>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </FormContainer>
  );
};

export default Register;

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>
        <Link to="/">Amazonas</Link>
      </h2>
      <div>
        <h3>Crear cuenta</h3>
        <p>Formulario</p>
        {/* <form>
          <label>
            <p>Dirección de correo electrónico</p>
            <input />
          </label>
          <button>Continuar</button>
        </form> */}
      </div>
      <p>¿Eres nuevo en amazonas?</p>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Register;

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { createContext, useState } from "react";
import { authGoogle } from "../firebase/firebaseConfig";

const AuthContext = createContext();

// const initialAuth = null;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const dameAuth = getAuth();
  onAuthStateChanged(dameAuth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //const uid = user.uid;
      setAuth(user);
      //console.log(user, uid);
      // ...
    } else {
      // User is signed out
      setAuth(null);
      // ...
    }
  });

  const loginEmailPassword = (email, password, navigate) => {
    const authStatus = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(authStatus, email, password)
      .then(({ user }) => {
        setAuth(user);
        console.log("Bienvenido " + (user.displayName || user.email));
        window.alert("Inicio de sesión exitoso");
        navigate("/", {
          replace: true,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("El usuario no existe");
      });
  };

  const registerEmailPassword = (
    { name, email, password, secPassword },
    navigate
  ) => {
    console.log(password, secPassword);
    if (password === secPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          await updateProfile(auth.currentUser, { displayName: name });
          console.log(user);
          window.alert("Registro exitoso");
          navigate("/", {
            replace: true,
          });
        })
        .catch((error) => {
          console.log(error);
          console.log("hay un error");
        });
    } else {
      console.log("Contraseñas distintas");
    }
  };

  const loginGoogle = (navigate) => {
    const auth = getAuth();
    signInWithPopup(auth, authGoogle)
      .then(({ user }) => {
        setAuth(user);
        console.log("Inicio de sesión exitoso");
        navigate("/", {
          replace: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const logout = (navigate) => {
    console.log("Hola");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log("An error happened.");
        // An error happened.
      });
  };

  const handleAuth = (e, form, navigate) => {
    e.preventDefault();
    switch (e.target.id) {
      case "login-form":
        loginEmailPassword(form.email, form.password, navigate);
        break;
      case "register-form":
        registerEmailPassword(form, navigate);
        break;
      case "login-google":
        loginGoogle(navigate);
        break;
      default:
        break;
    }
  };

  const data = { auth, handleAuth, logout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;

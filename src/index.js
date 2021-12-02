import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ShoppingCart from "./components/ShoppingCart";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "./styles/styledComp";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/shopping" element={<ShoppingCart />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

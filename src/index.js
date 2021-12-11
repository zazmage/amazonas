import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "./styles/styledComp";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import ProductInfo from "./components/ProductInfo";
import Login from "./components/Login";
import Register from "./components/Register";
import ShoppingCart from "./components/ShoppingCart";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/productInfo">
              <Route path=":productName" element={<ProductInfo />} />
            </Route>
            <Route path="/shopping" element={<ShoppingCart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

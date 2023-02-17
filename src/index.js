import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter   } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// import "react-toastify/dist/ReactToastify.css";
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { contactReducer } from "";
import { composeWithDevTools } from "redux-devtools-extension";
import store from "./store"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
reportWebVitals();
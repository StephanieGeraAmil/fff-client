import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LandingPage from "./components/LandingPage";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducers.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
console.log(process.env.REACT_APP_REDIRECTION_URL);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-7pl37pty.us.auth0.com"
          clientId="vNXWfuyHWr4jF94dV51O4ZclSOpkA8Hw"
          redirectUri={process.env.REACT_APP_REDIRECTION_URL}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/map" element={<App />} />
          </Routes>
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

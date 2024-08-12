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


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
          redirectUri={`${window.location.origin}/map`}
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

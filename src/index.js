import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{ ChatSection} from './components/chatSection';
import{ ChatPage} from './components/chatPage';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/reducers.js'
import { BrowserRouter,Routes,Route} from "react-router-dom"; 


const store= createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <Auth0Provider
            domain="dev-7pl37pty.us.auth0.com"
            clientId="vNXWfuyHWr4jF94dV51O4ZclSOpkA8Hw"
            redirectUri={window.location.origin}
          >
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/chats" element={<ChatSection />} />
                <Route path="/chats/:id" element={<ChatPage />} />
             
            </Routes>
              
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

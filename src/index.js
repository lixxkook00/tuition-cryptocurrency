import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';;

const root = ReactDOM.createRoot(document.getElementById('root'));

const GOOGLE_OAUTH_CLIENT_ID = `865991652545-t3q4olbn87u6bgv7l15b6k8qaor63e66.apps.googleusercontent.com`

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
    <React.StrictMode>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

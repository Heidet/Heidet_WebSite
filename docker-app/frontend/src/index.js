import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import moment from 'moment-timezone';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

moment.tz.setDefault("Europe/Paris");


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}  path="/" />
      <Route element={<Login />}  path="login" />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

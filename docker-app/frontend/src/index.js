import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import Contact from './views/Contact/index';

import Certificats from './views/Certificats';
import moment from 'moment-timezone';
import PageNotFound from "./views/Errors/Error404";
import GitHub from "./components/GitHub/index";
import GithubError from "./components/GitHub/GithubError";
import "@tremor/react/dist/esm/tremor.css";
import {
  Route,
  Routes,
} from "react-router-dom";


moment.tz.setDefault("Europe/Paris");

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<App />}  path="/" />
        <Route element={<Login />}  path="login" />
        <Route element={<Certificats />}  path="/certificats" />
        <Route element={<Contact />}  path="/contact" />
        <Route path='/profile/github' element={<GitHub />} />
        <Route path='/error' element={<GithubError />} />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

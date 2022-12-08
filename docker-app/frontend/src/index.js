import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import moment from 'moment-timezone';
import PageNotFound from "./views/Errors/Error404";
import GithubError from "./components/GitHub/GithubError";
import UserProfile from "./components/GitHub/UserProfile";
import GitHubHome from "./components/GitHub/GitHubHome";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "@tremor/react/dist/esm/tremor.css";
moment.tz.setDefault("Europe/Paris");

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<App />}  path="/" />
        <Route element={<Login />}  path="login" />
        <Route path='/github' element={<GitHubHome />} />
        <Route path='/profile/github' element={<UserProfile />} />
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

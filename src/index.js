import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "./fonts/Rubik-Bold.ttf";
// import "./fonts/Rubik-Medium.ttf";
// import "./fonts/Rubik-Regular.ttf";
import "./fonts/NotoSansJP-Bold.otf";
import "./fonts/NotoSansJP-Medium.otf";
import "./fonts/NotoSansJP-Regular.otf";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/article-store";

configureStore();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

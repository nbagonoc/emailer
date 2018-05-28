import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import "./index.css";

import App from "./components/App";
import reducers from "./reducers";

// temporary for backend testing
import axios from "axios";
window.axios = axios;

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(reduxThunk),
    window.navigator.userAgent.includes("Chrome")
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

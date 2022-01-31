import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/redux_store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Loading } from "./components/Loading/Loading";
const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
